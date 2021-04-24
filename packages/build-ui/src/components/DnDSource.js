import React, {useCallback, useEffect, useRef, useState} from "react"
import {batch} from "react-redux";

const DnDSource = ({
    onDrop = () => {},
    onDragEnd = () => {},
    onDragOver = () => {},
    onDragStart = () => {},
    onDragEnter = () => {},
    onDragLeave = () => {},
    allowTouch = true,
    dragTouchTimeThreshold = 400,
    // dragTouchMoveThreshold,
    isDragging = false, 
    children,
    ...rest
}) => {
    const box = useRef();
    const insideBox = useRef(false);
    const draggingBox = useRef(false);
    const [dragTouchActive, setDragTouchActive] = useState(false);
    const [dragTouchEvent, setDragTouchEvent] = useState(null);
    const handleDragStartMouse = event => {
        event.stopPropagation();
        // Do not start drag operation
        // if there is one currently 
        // running, (some mobile browsers
        // will trigger both drag start
        // and mouse down events for drag
        // start).
        if (dragTouchActive) return;
        onDragStart(event);
        draggingBox.current = true;
    }
    const handleDragEnterMouse = event => {
        onDragEnter(event);
    }
    const handleDragLeaveMouse = event => {
        onDragLeave(event);
    }
    const handleDragOverMouse = event => {
        event.preventDefault();
        onDragOver(event);
    }
    const handleDropMouse = event => {
        event.dropTarget = box.current;
        onDrop(event);
    }
    const handleDragStartTouch = event => {
        event.stopPropagation();
        // Do not start drag just yet. 
        // Set state to active to
        // let time threshold to 
        // determine whether or not
        // to trigger onDragStart.
        setDragTouchActive(true);
        setDragTouchEvent(event);
    }
    const handleDragEndTouch = event => {
        // Restart touch state in case
        // there is not an an ongoing drag 
        // operation for this Source 
        // component.
        if (!draggingBox.current) {
            setDragTouchActive(false);
            setDragTouchEvent(null);
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
            batch(() => onDragEnd(event));
            draggingBox.current = false;
        }, 0);
    }
    // Effect to handle drag start
    // time threshold for touch
    // start event.
    useEffect(() => {
        if (!dragTouchActive) return;
        const handleDragStart = () => {
            batch(() => {
                setDragTouchActive(false);
                setDragTouchEvent(null);
                onDragStart(dragTouchEvent)
            });
            draggingBox.current = true;
        }
        const timeout = setTimeout(() => {
            handleDragStart();
        }, dragTouchTimeThreshold);
        return () => clearTimeout(timeout);
    }, [
        dragTouchActive,
        dragTouchEvent,
        onDragStart,
        dragTouchTimeThreshold
    ]);
    const isInsideBounds = useCallback((clientX, clientY) => {
        const element = box.current;
        // Necessary for when node is
        // moved in DOM and ref is 
        // still unattached to div 
        // component.
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const insideBounds = (
            rect.left < clientX &&
            rect.left + rect.width > clientX &&
            rect.top < clientY &&
            rect.top + rect.height > clientY
        );
        return insideBounds;
    }, []);
    useEffect(() => {
        if (!isDragging || !allowTouch) return;
        const handleToggle = inside => {
            if (inside) batch(() => onDragEnter());
            if (!inside) batch(() => onDragLeave());
            insideBox.current = inside;
        }
        const handleTouchOver = event => {
            const clientX = event.touches[0].clientX;
            const clientY = event.touches[0].clientY;
            const insidePrev = insideBox.current;
            const insideNow = isInsideBounds(clientX, clientY);
            if (insidePrev !== insideNow) handleToggle(insideNow);
            if (!insideNow) return;
            batch(() => onDragOver(event)); 
        }
        const handleTouchUp = event => {
            const clientX = event.changedTouches[0].clientX;
            const clientY = event.changedTouches[0].clientY;
            const inside = isInsideBounds(clientX, clientY);
            if (inside) {
                event.dropTarget = box.current;
                batch(() => onDrop(event));
            }
        }
        document.addEventListener(
            'touchmove',
            handleTouchOver,
            {passive: false}
        );
        document.addEventListener(
            'touchend',
            handleTouchUp,
            {passive: false} 
        );
        return () => {
            document.removeEventListener(
                'touchmove',
                handleTouchOver,
            );
            document.removeEventListener(
                'touchend',
                handleTouchUp,
            );
        }
    }, [
        onDragEnter,
        onDragLeave,
        onDragOver,
        onDrop,
        isInsideBounds,
        isDragging,
        allowTouch,
    ]);
    // Cannot use as synthetic event
    // since node can be moved in DOM 
    // and drag end event is not triggered
    // in such cases.
    useEffect(() => {
        if (!box.current) return;
        const element = box.current;
        const handleDragEndMouse = event => {
            if (!draggingBox.current) return;
            batch(() => onDragEnd(event));
            draggingBox.current = false;
        }
        box.current.addEventListener(
            'dragend',
            handleDragEndMouse
        );
        return () => {
            // && for move events when 
            // box is reassigned to 
            // div component
            element && element.removeEventListener(
                'dragend',
                handleDragEndMouse,
            );
        }
    }, [
        onDragEnd,
    ]);
    function getMouseEventHandlers() {
        const passiveHandlers = {
            onDragStart: handleDragStartMouse,
        };
        const activeHandlers = {
            onDragEnter: handleDragEnterMouse,
            onDragLeave: handleDragLeaveMouse,
            onDragOver: handleDragOverMouse,
            onDrop: handleDropMouse,
            ...passiveHandlers,
        }
        return isDragging 
        ? activeHandlers 
        : passiveHandlers;
    }
    function getTouchSupportEventHandlers() {
        const passiveHandlers = {
            onTouchStart: handleDragStartTouch,
            onTouchEnd: handleDragEndTouch,
        }
        return passiveHandlers;
    }
    return <div 
        {...rest}
        ref = {box}
        // Mouse events (HTML 5)
        {...getMouseEventHandlers()}
        // Touch events (Mobile)
        {...getTouchSupportEventHandlers()}
    >
        {children}
    </div>
}

export default DnDSource;