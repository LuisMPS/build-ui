import React, {useEffect, useRef, useState} from "react"
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
    onDragIn,
    onDragOut,
    allowTouch = true,
    dragTouchTimeThreshold = 200,
    // dragTouchMoveThreshold,
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
    }, [box])

    // Events that go attached to 
    // this DOM node and trigger
    // react synthetic events.

    const handleDragStartMouse = useEventCallback(event => {
        event.stopPropagation();
        // Do not start drag operation
        // if there is one currently 
        // running, (some mobile browsers
        // will trigger both drag start
        // and mouse down events for drag
        // start).
        if (dragTouchActive) return;
        batch(() => onDragStart(event));
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

    const handleDragStartTouch = useEventCallback(event => {
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
            onDragStart(event)
        });
        draggingBox.current = true;
    });

    const handleDragEndMouse = useEventCallback(event => {
        if (!draggingBox.current) return;
        batch(() => onDragEnd(event));
        draggingBox.current = false;
    });

    const handleDragEndTouch = useEventCallback(event => {
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
            batch(() => onDragEnd(event));
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
        }
    }, [
        box,
        onDragStart,
        onDragEnd,
        onDrop,
        handleDragStartMouse,
        handleDragEndMouse,
        handleAllowDragOverMouse
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
        return () => {
            if (onDragStart && ref) ref.removeEventListener(
                'touchstart',
                handlePreDragStartTouch,
            );
            if (onDragEnd && ref) ref.removeEventListener(
                'touchend',
                handleDragEndTouch,
            );
        }
    }, [
        box,
        allowTouch,
        onDragStart,
        onDragEnd,
        handlePreDragStartTouch,
        handleDragEndTouch,
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

    const handleDragOver = useEventCallback(event => {
        batch(() => onDragOver(event));
    });

    const handleDragEnter = useEventCallback(event => {
        batch(() => onDragEnter(event));
    });

    const handleDragLeave = useEventCallback(event => {
        batch(() => onDragLeave(event));
    });

    const handleDragIn = useEventCallback(event => {
        batch(() => onDragIn(event));
    });

    const handleDragOut = useEventCallback(event => {
        batch(() => onDragOut(event));
    });

    const handleDrop = useEventCallback(event => {
        batch(() => onDrop(event));
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
        if (onDragIn) events.addEventListener(
            ref,
            'dragin',
            handleDragIn,
        );
        if (onDragOut) events.addEventListener(
            ref,
            'dragout',
            handleDragOut,
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
            if (onDragIn && ref) events.removeEventListener(
                ref,
                'dragin',
                handleDragIn,
            );
            if (onDragOut && ref) events.removeEventListener(
                ref,
                'dragout',
                handleDragOut,
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
        onDragIn,
        onDragOut,
        onDrop,
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
        handleDragIn,
        handleDragOut,
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