import useStyle from './style/Canvas';
import clsx from 'clsx';
import React from 'react';

const Canvas = React.forwardRef(({
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classAll = clsx(
        className, 
        classes.canvas,
    );
    return <div
        ref = {ref}
        className = {classAll}
        {...props}
    />
});

export default Canvas;