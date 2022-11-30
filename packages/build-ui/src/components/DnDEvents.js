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
    // of current entered element
    const insideOne = useRef(null);

    // An object to keep reference
    // of current entered elements
    const insideMultiple = useRef([]);

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
        for (const element of elements) {
            const handlers = getHandlers(element, type);
            if (handlers.length === 0) continue;
            // Element is equal to previously 
            // entered element. No action needed.
            if (ref.current === element) return;
            ref.current = element;
            if (event.isPropagationStopped()) return;
            mutateEventTarget(event, element);
            // Call handlers for element, which
            // was determined to be topmost
            // and was not topmost before.
            handlers.forEach(handler => handler(event));
            return;
        }
    }

    const getLeavingEventHandler = type => (...sideTypes) => event => ref => {
        mutateEventStopPropagation(event);
        const elements = getEventElements(event);
        const inside = ref.current;
        // Cannot leave if there is not an
        // element which was previously 
        // entered
        if (!inside) return;
        // If there was an element in which
        // drag was inside of but is no
        // longer inside of it.
        let leaveOut = true;
        for (const element of elements) {
            if (element != inside) continue;
            leaveOut = false;
            break;
        }
        // If there was an element in which
        // drag was inside of but there is
        // another element which also has
        // a side type listener.
        let leaveAnother = false;
        for (const element of elements) {
            const find = type => getHandlers(element, type).length > 0;
            const hasHandlers = sideTypes.find(find);
            if (!hasHandlers) continue;
            if (element === inside) break;
            leaveAnother = true;
            break;
        }
        if (!leaveOut && !leaveAnother) return; 
        if (leaveOut) ref.current = null;
        if (event.isPropagationStopped()) return;
        const handlers = getHandlers(inside, type);
        if (handlers.length === 0) return;
        mutateEventTarget(event, inside);
        handlers.forEach(handler => handler(event));
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
        ref.current = elements;
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
    }

    // eslint-disable-next-line
    function handleDrop(event) {
        getBubblingEventHandler('drop')(event);
    }

    // eslint-disable-next-line
    function handleDragOver(event) {
        getBubblingEventHandler('dragover')(event);
    }

    // eslint-disable-next-line
    function handleDragEnter(event) {
        getEnteringEventHandler('dragenter')(event)(insideOne);
    }

    // eslint-disable-next-line
    function handleDragLeave(event) {
        getLeavingEventHandler('dragleave')('dragenter')(event)(insideOne);
    }

    // eslint-disable-next-line
    function handleDragIn(event) {
        getInEventHandler('dragin')(event)(insideMultiple);
    }

    // eslint-disable-next-line
    function handleDragOut(event) {
        getOutEventHandler('dragout')(event)(insideMultiple);
    }

    useEffect(() => {
        if (!isTransfering) return;
        document.addEventListener(
            'dragover',
            handleDragLeave,
        );
        document.addEventListener(
            'dragover',
            handleDragOut,
        );
        document.addEventListener(
            'dragover',
            handleDragIn,
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
                handleDragOut,
            );
            document.removeEventListener(
                'dragover',
                handleDragIn,
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
        handleDragIn,
        handleDragOut,
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
            handleDragOut
        );
        document.addEventListener(
            'touchmove',
            handleDragIn
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
                handleDragOut,
            );
            document.removeEventListener(
                'touchmove',
                handleDragIn
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
        handleDragIn,
        handleDragOut,
        handleDrop,
    ]);

    // Cleanup insideOne
    // whenever isDragging
    // is set to false.
    useEffect(() => {
        if (isTransfering) return;
        insideOne.current = null;
    }, [
        isTransfering
    ]);

    // Cleanup insideMultiple
    // whenever isDragging
    // is set to false.
    useEffect(() => {
        if (isTransfering) return;
        insideMultiple.current = [];
    }, [
        isTransfering
    ]);

    return null;

}

export default DnDEvents;