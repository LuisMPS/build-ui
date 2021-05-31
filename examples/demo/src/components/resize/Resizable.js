import clsx from "clsx";
import React from "react"
import ResizeAnchors from "./ResizeAnchors";
import useStyle from './style/Resizable';

const Resizable = Component => React.forwardRef(({
    children,
    className,
    isResizing,
    onResizeStart,
    onResize,
    onResizeEnd,
    cancelClickOnEnd,
    ...rest
}, ref) => {
    const classes = useStyle();
    const classAll = clsx(
        classes.resizer,
        className, 
    );
    return <Component 
        className = {classAll}
        ref = {ref}
        {...rest}
    >
        {children}
        {isResizing && <ResizeAnchors
            onResizeStart = {onResizeStart}
            onResize = {onResize}
            onResizeEnd = {onResizeEnd}
            cancelClickOnEnd = {cancelClickOnEnd}
        />}
    </Component>
});

export default Resizable;