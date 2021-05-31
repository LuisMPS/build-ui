import useStyle from './style/Text';
import clsx from 'clsx';
import React from 'react';

const Text = React.forwardRef(({
    children,
    className,
    style,
    text,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classText = clsx(
        classes.text,
        classes.fill,
    );
    const classAll = clsx(
        className,
        classes.ui,
    )
    return <div
        className = {classAll}
    >
        <p 
            ref = {ref}
            className = {classText}
            {...props}
        >
            {text}
        </p>
        {children}
    </div>
});

export default Text;