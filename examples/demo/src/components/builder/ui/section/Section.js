import useStyle from './style/Section';
import clsx from 'clsx';
import React from 'react';

const Section = React.forwardRef(({
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classAll = clsx(
        className,
        classes.section,
        classes.ui,
        classes.position,
    );
    return <div 
        className = {classAll}
        ref = {ref}
        {...props}
    />
});

export default Section;