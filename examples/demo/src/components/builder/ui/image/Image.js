import useStyle from './style/Image';
import clsx from 'clsx';
import React from 'react';

const Image = React.forwardRef(({
    children,
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classImage = clsx(
        classes.image,
        classes.fill,
    );
    const classAll = clsx(
        className,
        classes.ui,
    )
    return <div 
        className = {classAll}
    >
        <img
            className = {classImage}
            ref = {ref}
            {...props}
        /> 
        {children}
    </div> 
});

export default Image;