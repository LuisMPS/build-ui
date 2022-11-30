import {useEffect, useRef} from 'react';
import useDnD from '../hooks/dnd/useDnD';
import useEventHelpers from '../hooks/events/useEventHelpers';

const DnDEvents = ({
    listeners,
}) => {

    const dnd = useDnD({});
    const isTransfering = dnd.isTransfering;

    const events = useEventHelpers();

    function mutateEventStopPropagation(event) {
        function stopPropagation() {
            event.__stopped = true;
        }
        function isPropagationStopped() {
            return event.__stopped;
        }
        Object.defineProperty(
            event,
            'stopPropagation',
            {value: stopPropagation,
            configurable: true}
        );
        Object.defineProperty(
            event,
            'isPropagationStopped',
            {value: isPropagationStopped,
            configurable: true},
        );
        Object.defineProperty(
            event,
            '__stopped',
            {value: false,
            configurable: true,
            writable: true},
        );
        return event;
    }

    function mutateEventTarget(event, target) {
        Object.defineProperty(
            event,
            'currentTarget',
            {value: target,
            configurable: true,
            writable: true},
        );
        return event;
    }

    // An object to keep reference
    // of current entered element
    const dragEnterElements = useRef({});

    // Heavy imperative code below.
    // Manages and implements logic
    // for drag and drop events.

    function getEventElements(event) {
        const [x, y] = events.getEventClientCoords(event);
        return document.elementsFromPoint(x, y);
    }

    function getHandlers(element, type) {
        const handlerMap = listeners.get(element) || {};
        const handlers = handlerMap[type] || [];
        return handlers;
    }

    const getPositionedEventHandler = type => event => {
        mutateEventStopPropagation(event);
        const elements = getEventElements(event);
        // Loop through all elements
        // at event position and call 
        // handlers for elements that
        // have at least one attached.
        for (const element of elements) {
            if (event.isPropagationStopped()) break;
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            mutateEventTarget(event, element);
            handlers.forEach(handler => handler(event));
        }
    }

    const getEnteringEventHandler = type => event => ref => {
        const elements = getEventElements(event);
        const highestElements = {};
        for (const element of elements) {
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            const dragTypes = element.dragTypes || [];
            for (const dragType of dragTypes) {
                if (highestElements[dragType]) continue;
                highestElements[dragType] = element;
            }
        }
        for (const [dragType, element] of Object.entries(highestElements)) {
            if (ref.current[dragType] === element) continue;
            ref.current[dragType] = element;
            mutateEventTarget(event, element);
            const handlers = getHandlers(element, type);
            handlers.forEach(handler => handler(event, dragType));
        }
    }

    const getLeavingEventHandler = type => event => ref => {
        const elements = getEventElements(event);
        const highestElements = {};
        for (const element of elements) {
            const handlers = getHandlers(element, 'dragenter');
            if (handlers.length === 0) continue;
            const dragTypes = element.dragTypes || [];
            for (const dragType of dragTypes) {
                if (highestElements[dragType]) continue;
                highestElements[dragType] = element;
            }
        }
        for (const [dragType, element] of Object.entries(ref.current)) {
            if (highestElements[dragType] === element) continue;
            delete ref.current[dragType];
            mutateEventTarget(event, element);
            const handlers = getHandlers(element, type);
            handlers.forEach(handler => handler(event, dragType));
        }
    }

    // eslint-disable-next-line
    function handleDrop(event) {
        getPositionedEventHandler('drop')(event);
    }

    // eslint-disable-next-line
    function handleDragOver(event) {
        getPositionedEventHandler('dragover')(event);
    }

    // eslint-disable-next-line
    function handleDragEnter(event) {
        getEnteringEventHandler('dragenter')(event)(dragEnterElements);
    }

    // eslint-disable-next-line
    function handleDragLeave(event) {
        getLeavingEventHandler('dragleave')(event)(dragEnterElements);
    }

    useEffect(() => {
        if (!isTransfering) return;
        document.addEventListener(
            'dragover',
            handleDragLeave,
        );
        document.addEventListener(
            'dragover',
            handleDragEnter,
        );
        document.addEventListener(
            'dragover',
            handleDragOver,
        );
        document.addEventListener(
            'drop',
            handleDrop,
        );
        return () => {
            document.removeEventListener(
                'dragover',
                handleDragLeave,
            );
            document.removeEventListener(
                'dragover',
                handleDragEnter,
            );
            document.removeEventListener(
                'dragover',
                handleDragOver,
            );
            document.removeEventListener(
                'drop',
                handleDrop,
            );
        }
    }, [
        isTransfering,
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
        handleDrop,
    ]);

    useEffect(() => {
        if (!isTransfering) return;
        document.addEventListener(
            'touchmove',
            handleDragLeave
        );
        document.addEventListener(
            'touchmove',
            handleDragEnter
        );
        document.addEventListener(
            'touchmove',
            handleDragOver
        );
        document.addEventListener(
            'touchend',
            handleDrop,
        );
        return () => {
            document.removeEventListener(
                'touchmove',
                handleDragLeave,
            );
            document.removeEventListener(
                'touchmove',
                handleDragEnter
            );
            document.removeEventListener(
                'touchmove',
                handleDragOver
            );
            document.removeEventListener(
                'touchend',
                handleDrop,
            );
        }
    }, [
        isTransfering,
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
        handleDrop,
    ]);

    // Cleanup dragEnterElements
    // whenever isDragging
    // is set to false.
    useEffect(() => {
        if (isTransfering) return;
        dragEnterElements.current = {};
    }, [isTransfering]);

    return null;

}

export default DnDEvents;