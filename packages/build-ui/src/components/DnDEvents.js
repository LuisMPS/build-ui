import {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import useEventHelpers from '../hooks/events/useEventHelpers';
import {getTransfer} from '../selectors';
import {getTransferData} from '../selectors/transfer';

const DnDEvents = ({
    listeners,
}) => {

    const selector = store => (
        getTransfer(store)
    );
    const transfer = useSelector(
        selector
    );
    const data = getTransferData(
        transfer
    );
    const isTransfering = Boolean(
        data
    );

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
    // of elements that are entered 
    // and scheduled to be left.
    const position = useRef({
        entered: [],
        left: []
    });

    // An array to keep reference 
    // of the elements that current
    // drag is inside.
    const inside = useRef([]);

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

    const getBubblingEventHandler = type => event => {
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
        mutateEventStopPropagation(event);
        const elements = getEventElements(event);
        const entered = ref.current.entered;
        // Loop that determines whether
        // there is an element at event
        // position that can be entered
        // and has not yet been entered.
        for (const element of elements) {
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            if (entered.includes(element)) break;
            ref.current.left = ref.current.entered;
            ref.current.entered = [];
            break;
        }
        // Call all type handlers for
        // elements that were entered
        // in this event.
        for (const element of elements) {
            if (event.isPropagationStopped()) break;
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            if (entered.includes(element)) break;
            mutateEventTarget(event, element);
            handlers.forEach(handler => handler(event));
            ref.current.entered = [...ref.current.entered, element];
        }
    }

    const getLeavingEventHandler = type => event => ref => {
        mutateEventStopPropagation(event);
        const elements = getEventElements(event);
        const entered = ref.current.entered;
        const inside = entered.filter(el => elements.includes(el));
        const outside = entered.filter(el => !elements.includes(el));
        const willLeave = [...ref.current.left, ...outside];
        const left = [...new Set(willLeave)];
        ref.current.entered = inside;
        ref.current.left = left;
        // Call all type handlers for
        // elements that were left in
        // this event. (by leaving
        // bounds or by entering an 
        // uppermost element).
        for (const element of left) {
            if (event.isPropagationStopped()) break;
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            mutateEventTarget(event, element);
            handlers.forEach(handler => handler(event));
        }
       ref.current.left = [];
    }

    const getInEventHandler = type => event => ref => {
        mutateEventStopPropagation(event);
        const elements = getEventElements(event);
        const insideBefore = ref.current;
        // Call all type handlers for
        // elements that are events
        // position and were not in
        // previous event's position.
        for (const element of elements) {
            if (event.isPropagationStopped()) break;
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            if (insideBefore.includes(element)) continue;
            mutateEventTarget(event, element);
            handlers.forEach(handler => handler(event));
        }
    }

    const getOutEventHandler = type => event => ref => {
        mutateEventStopPropagation(event);
        const elements = getEventElements(event);
        const insideBefore = ref.current;
        // Call all type handlers for
        // elements that were in previous
        // event's position and are not 
        // in current event's position.
        for (const element of insideBefore) {
            if (event.isPropagationStopped()) break;
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            if (elements.includes(element)) continue;
            mutateEventTarget(event, element);
            handlers.forEach(handler => handler(event));
        }
        ref.current = elements;
    }

    
    function handleDrop(event) {
        getBubblingEventHandler('drop')(event);
    }

    function handleDragOver(event) {
        getBubblingEventHandler('dragover')(event);
    }

    function handleDragEnter(event) {
        getEnteringEventHandler('dragenter')(event)(position);
    }

    function handleDragLeave(event) {
        getLeavingEventHandler('dragleave')(event)(position);
    }

    function handleDragIn(event) {
        getInEventHandler('dragin')(event)(inside);
    }

    function handleDragOut(event) {
        getOutEventHandler('dragout')(event)(inside);
    }

    useEffect(() => {
        if (!isTransfering) return;
        document.addEventListener(
            'dragover',
            handleDragOver,
        );
        document.addEventListener(
            'dragover',
            handleDragEnter,
        );
        document.addEventListener(
            'dragover',
            handleDragLeave,
        );
        document.addEventListener(
            'dragover',
            handleDragIn,
        );
        document.addEventListener(
            'dragover',
            handleDragOut,
        );
        document.addEventListener(
            'drop',
            handleDrop,
        );
        return () => {
            document.removeEventListener(
                'dragover',
                handleDragOver,
            );
            document.removeEventListener(
                'dragover',
                handleDragEnter,
            );
            document.removeEventListener(
                'dragover',
                handleDragLeave,
            );
            document.removeEventListener(
                'dragover',
                handleDragIn,
            );
            document.removeEventListener(
                'dragover',
                handleDragOut,
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
        handleDragIn,
        handleDragOut,
        handleDrop,
    ]);

    useEffect(() => {
        if (!isTransfering) return;
        document.addEventListener(
            'touchmove',
            handleDragOver
        );
        document.addEventListener(
            'touchmove',
            handleDragEnter
        );
        document.addEventListener(
            'touchmove',
            handleDragLeave
        );
        document.addEventListener(
            'touchmove',
            handleDragIn
        );
        document.addEventListener(
            'touchmove',
            handleDragOut
        );
        document.addEventListener(
            'touchend',
            handleDrop,
        );
        return () => {
            document.removeEventListener(
                'touchmove',
                handleDragOver,
            );
            document.removeEventListener(
                'touchmove',
                handleDragEnter,
            );
            document.removeEventListener(
                'touchmove',
                handleDragLeave
            );
            document.removeEventListener(
                'touchmove',
                handleDragIn
            );
            document.removeEventListener(
                'touchmove',
                handleDragOut
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
        handleDragIn,
        handleDragOut,
        handleDrop,
    ]);

    // Cleanup position obj
    // whenever isDragging
    // is set to false.
    useEffect(() => {
        if (isTransfering) return;
        position.current = {
            entered: [],
            left: []
        };
    }, [
        isTransfering
    ]);

    // Cleanup inside array
    // whenever isDragging
    // is set to false.
    useEffect(() => {
        if (isTransfering) return;
        inside.current = [];
    }, [
        isTransfering
    ]);

    return null;

}

export default DnDEvents;