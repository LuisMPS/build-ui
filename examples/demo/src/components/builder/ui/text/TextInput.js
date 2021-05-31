import useStyle from './style/TextInput';
import clsx from 'clsx';
import React from 'react';

const TextInput = React.forwardRef(({
    children,
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classArea = clsx(
        classes.textInput,
        classes.fill
    );
    const classAll = clsx(
        className,
        classes.ui
    );
    return <div 
        className = {classAll}
    >
        <textarea 
            ref = {ref}
            className = {classArea} 
            {...props}
        />
        {children}
    </div>

});

export default TextInput;