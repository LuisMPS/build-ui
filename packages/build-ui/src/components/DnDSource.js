import React, {useEffect, useState, useRef} from "react"
import useShareRef from "../hooks/useShareRef";
import useBuilderContext from "../hooks/useBuilderContext";
import useEventCallback from "../hooks/events/useEventCallback";
import {batch} from "react-redux";

const DnDSource = React.forwardRef(function DnDSource({
    onDrop,
    onDragEnd,
    onDragOver,
    onDragStart,
    onDragEnter,
    onDragLeave,
    onDrag,
    allowTouch = true,
    dragTouchTimeThreshold = 200,
    dragTypes = 'any',
    isDragging = false, 
    as = 'div',
    ...rest
}, ref) {

    // Use share ref to both forward
    // ref to parent component and
    // to use ref internally.
    const box = useShareRef(ref);
    const draggingBox = useRef(false);
    const [dragTouchActive, setDragTouchActive] = useState(false);
    const [dragTouchEvent, setDragTouchEvent] = useState(null);

    // Warn client if box was not
    // attached to any DOM node
    // since it will cause problems.

    useEffect(() => {
        if (box.current) return;
        console.warn(`
            Could not attach ref
            to underlying DOM node.
            You should allow ref
            forwarding in underlying
            node to attach listeners.
        `);
    }, [box]);

    useEffect(() => {
        if (!box.current) return;
        box.current.dragTypes = dragTypes.split(" ");
    }, [box, dragTypes]);

    // Events that go attached to 
    // this DOM node and trigger
    // react synthetic events.

    const handleDragStartMouse = useEventCallback((event, ...args) => {
        event.stopPropagation();
        // Do not start drag operation
        // if there is one currently 
        // running, (some mobile browsers
        // will trigger both drag start
        // and touch down events for drag
        // start).
        if (dragTouchActive) return;
        batch(() => onDragStart(event, ...args));
        draggingBox.current = true;
    });

    const handlePreDragStartTouch = useEventCallback(event => {
        event.stopPropagation();
        // Do not start drag just yet. 
        // Set state to active to
        // let time threshold to 
        // determine whether or not
        // to trigger onDragStart.
        batch(() => {
            setDragTouchActive(true);
            setDragTouchEvent(event);
        });
    });

    const handleDragStartTouch = useEventCallback((event, ...args) => {
        // Must re define currentTarget
        // because drag start touch is 
        // handled asynchronously.
        Object.defineProperty(
            event,
            'currentTarget',
            {value: box.current,
            configurable: true}
        );
        batch(() => {
            setDragTouchActive(false);
            setDragTouchEvent(null);
            onDragStart(event, ...args);
        });
        draggingBox.current = true;
    });

    const handleDragEndMouse = useEventCallback((event, ...args) => {
        if (!draggingBox.current) return;
        batch(() => onDragEnd(event, ...args));
        draggingBox.current = false;
    });

    const handleDragEndTouch = useEventCallback((event, ...args) => {
        // Restart touch state in case
        // there is not an an ongoing drag 
        // operation for this Source 
        // component.
        if (!draggingBox.current) {
            batch(() => {
                setDragTouchActive(false);
                setDragTouchEvent(null);
            });
            return;
        }
        // Prevent default to prevent click
        // from occurring in case there
        // is an ongoing drag operation
        // for this Source component.
        if (event.cancelable) event.preventDefault();
        // Handle drag end async to allow
        // other Source components to 
        // handle onDrop event before 
        // handling onDragEnd event for
        // this Source component.
        setTimeout(() => {
            // Must re define currentTarget
            // because drag end touch is 
            // handled asynchronously.
            Object.defineProperty(
                event,
                'currentTarget',
                {value: box.current,
                configurable: true}
            );
            batch(() => onDragEnd(event, ...args));
            draggingBox.current = false;
        }, 0);
    });

    // Must add handler to node
    // to allow drop and trigger
    // drag over animation to occur
    // in this component.

    const handleAllowDragOverMouse = useEventCallback(event => {
        event.preventDefault();
    });

    const handleDrag = useEventCallback((...args) => {
        batch(() => onDrag(...args));
    });

    // Effect to attach event
    // listeners to DOM node
    // in ref for HTML 5 API

    useEffect(() => {
        if (!box.current) return;

        const ref = box.current;

        if (onDragStart) ref.addEventListener(
            'dragstart',
            handleDragStartMouse
        );
        if (onDragEnd) ref.addEventListener(
            'dragend',
            handleDragEndMouse
        );
        if (onDrop) ref.addEventListener(
            'dragover',
            handleAllowDragOverMouse
        );
        if (onDrag) ref.addEventListener(
            'drag',
            handleDrag
        );
        return () => {
            if (onDragStart && ref) ref.removeEventListener(
                'dragstart',
                handleDragStartMouse,
            );
            if (onDragEnd && ref) ref.removeEventListener(
                'dragend',
                handleDragEndMouse,
            );
            if (onDrop && ref) ref.removeEventListener(
                'dragover',
                handleAllowDragOverMouse,
            );
            if (onDrag && ref) ref.removeEventListener(
                'drag',
                handleDrag
            );
        }
    }, [
        box,
        onDragStart,
        onDragEnd,
        onDrop,
        onDrag,
        handleDragStartMouse,
        handleDragEndMouse,
        handleAllowDragOverMouse,
        handleDrag,
    ]);

    // Effect to attach event
    // listeners to DOM node
    // in ref for Touch API

    useEffect(() => {
        if (!box.current || !allowTouch) return;

        const ref = box.current;

        if (onDragStart) ref.addEventListener(
            'touchstart',
            handlePreDragStartTouch
        );
        if (onDragEnd) ref.addEventListener(
            'touchend',
            handleDragEndTouch
        );
        if (onDrag) ref.addEventListener(
            'touchmove',
            handleDrag
        ); 
        return () => {
            if (onDragStart && ref) ref.removeEventListener(
                'touchstart',
                handlePreDragStartTouch,
            );
            if (onDragEnd && ref) ref.removeEventListener(
                'touchend',
                handleDragEndTouch,
            );
            if (onDrag && ref) ref.removeEventListener(
                'touchmove',
                handleDrag,
            );
        }
    }, [
        box,
        allowTouch,
        onDragStart,
        onDragEnd,
        onDrag,
        handlePreDragStartTouch,
        handleDragEndTouch,
        handleDrag,
    ]);

    // Effect to handle drag start
    // time threshold for touch
    // start event.

    useEffect(() => {
        if (!dragTouchActive) return;

        // Store timeout in variable
        // for cleanup.
        const timeout = setTimeout(
            handleDragStartTouch,
            dragTouchTimeThreshold,
            dragTouchEvent,
        );

        return () => clearTimeout(timeout);
    }, [
        dragTouchActive,
        dragTouchEvent,
        dragTouchTimeThreshold,
        handleDragStartTouch,
    ]);

    // Get event listener 
    // registration from 
    // context.
    const context = useBuilderContext();
    const events = context.events;

    const handleDragOver = useEventCallback((...args) => {
        batch(() => onDragOver(...args));
    });

    const handleDragEnter = useEventCallback((...args) => {
        batch(() => onDragEnter(...args));
    });

    const handleDragLeave = useEventCallback((...args) => {
        batch(() => onDragLeave(...args));
    });

    const handleDrop = useEventCallback((...args) => {
        batch(() => onDrop(...args));
    });
        
    // Effect to register event
    // handlers to document.

    useEffect(() => {
        if (!isDragging) return;

        const ref = box.current;

        if (onDragOver) events.addEventListener(
            ref,
            'dragover',
            handleDragOver,
        );
        if (onDragEnter) events.addEventListener(
            ref,
            'dragenter',
            handleDragEnter,
        );
        if (onDragLeave) events.addEventListener(
            ref,
            'dragleave',
            handleDragLeave,
        );
        if (onDrop) events.addEventListener(
            ref,
            'drop',
            handleDrop,
        );
        return () => {
            if (onDragOver && ref) events.removeEventListener(
                ref,
                'dragover',
                handleDragOver,
            );
            if (onDragEnter && ref) events.removeEventListener(
                ref,
                'dragenter',
                handleDragEnter,
            );
            if (onDragLeave && ref) events.removeEventListener(
                ref,
                'dragleave',
                handleDragLeave,
            );
            if (onDrop && ref) events.removeEventListener(
                ref,
                'drop',
                handleDrop,
            );
        }
    }, [
        events,
        box,
        onDragOver,
        onDragEnter,
        onDragLeave,
        onDrop,
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
        handleDrop,
        isDragging,
    ]);

    // Render with 'as' props 

    const Component = as;
    
    return <Component 
        {...rest}
        ref = {box}
    />

});

export default DnDSource;