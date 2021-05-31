import clsx from "clsx";
import {useCallback, useEffect, useRef, useState} from "react"
import {unstable_batchedUpdates as batch} from "react-dom"
import {isNumber} from "../../utils/number";
import useStyle from "./style/Anchor";

const Anchor = ({
    expandsDown,
    expandsRight,
    cancelClickOnEnd = true,
    onResizeStart = () => {},
    onResizeEnd = () => {},
    onResize = () => {},
    className,
    ...rest
}) => {
    const resizing = useRef(false);
    const [resize, setResize] = useState({
        startX: null,
        startY: null,
    });
    const expansion = useRef({
        x: 0,
        y: 0,
    });
    useEffect(() => {
        const {
            startX,
            startY,
        } = resize;
        if (!resizing.current) return;
        const start = {
            x: startX,
            y: startY, 
        }
        const getDirections = () => {
            const directionX = (
                expandsRight === true ? 1 : 
                expandsRight === false ? -1 : 0
            );
            const directionY = (
                expandsDown === true ? 1 : 
                expandsDown === false ? -1 : 0
            );
            return {
                x: directionX,
                y: directionY,
            };
        }
        const directions = getDirections();
        const handleResize = event => {
            if (!resizing.current) return;
            const pageX = (
                isNumber(event.pageX) 
                // For mouse events
                ? event.pageX
                // For touch event
                : event.touches[0].pageX
            );
            const pageY = (
                isNumber(event.pageY) 
                // For mouse events
                ? event.pageY
                // For touch event
                : event.touches[0].pageY
            );
            const moveX = pageX - startX;
            const moveY = pageY - startY;
            const expand = {
                x: moveX * directions.x,
                y: moveY * directions.y,
            };
            const lastExpand = {
                x: expansion.current.x,
                y: expansion.current.y,
            };
            const bag = {
                lastExpand: lastExpand,
                expand: expand,
                start: start,
                directions: directions,
            }
            batch(() => onResize(event, bag));
            expansion.current = expand;
        }
        const handleResizeEnd = event => {
            batch(() => {
                onResizeEnd(event);
                finishResize(event);
            });
        }
        const handleClickCancel = event => {
            event.stopPropagation();
        }
        document.addEventListener(
            'mousemove', 
            handleResize
        );
        document.addEventListener(
            'touchmove',
            handleResize,
        );
        document.addEventListener(
            'mouseup', 
            handleResizeEnd
        );
        cancelClickOnEnd && document.addEventListener(
            'click',
            handleClickCancel,
            {capture: true},
        );
        document.addEventListener(
            'touchend',
            handleResizeEnd,
        );
        return () => {
            document.removeEventListener(
                'mousemove', 
                handleResize
            );
            document.removeEventListener(
                'touchmove',
                handleResize,
            );
            document.removeEventListener(
                'mouseup', 
                handleResizeEnd
            );
            cancelClickOnEnd && document.removeEventListener(
                'click',
                handleClickCancel,
                {capture: true},
            );
            document.removeEventListener(
                'touchend', 
                handleResizeEnd,
            );
        }
    }, [
        resize, 
        // onResize,
        // onResizeEnd,
        finishResize,
        expandsDown,
        expandsRight,
        cancelClickOnEnd,
    ]);
    const startResize = useCallback(event => {
        const startX = (
            isNumber(event.pageX) 
            // For mouse events
            ? event.pageX
            // For touch event
            : event.touches[0].pageX
        );
        const startY = (
            isNumber(event.pageY) 
            // For mouse events
            ? event.pageY
            // For touch event
            : event.touches[0].pageY
        );
        setResize({
            startX: startX,
            startY: startY,
        });
        resizing.current = true;
    }, []);
    const finishResize = useCallback(_event => {
        setResize({
            startX: null,
            startY: null,
        });
        resizing.current = false;
        expansion.current = ({
            x: 0,
            y: 0
        });
    }, []);
    const handleResizeStartMouse = event => {
        const leftClick = event.button === 0;
        if (!leftClick) return;
        onResizeStart(event);
        startResize(event);
    }
    const handleResizeStartTouch = event => {
        onResizeStart(event);
        startResize(event);
    }
    const handleResizeEndTouch = event => {
        // Prevent default to prevent 
        // mouse events & click from 
        // being fired. Necessary for
        // support.
        if (event.cancelable) event.preventDefault();
        onResizeEnd(event);
        finishResize(event);
    }
    const classes = useStyle();
    const classAll = clsx(
        className,
        classes.anchor,
    );
    return <button
        tabIndex = {-1}
        onMouseDown = {handleResizeStartMouse}
        onTouchStart = {handleResizeStartTouch}
        onTouchEnd = {handleResizeEndTouch}
        className = {classAll}
        {...rest}
    />
}

export default Anchor;