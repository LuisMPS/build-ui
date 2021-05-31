import useStyle from "./style/Alert";
import AlertRoot from "./AlertRoot";
import clsx from "clsx";
import React from 'react';

const Alert = React.forwardRef(({
    style,
    className,
    children,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classAlert = clsx(
        classes.alert,
        classes.fill,
    );
    const classAll = clsx(
        className,
        classes.ui
    )
    return <div 
        className = {classAll}
    >
        <AlertRoot 
            ref = {ref}
            className = {classAlert}
            {...props}
        />
        {children}
    </div>
});

export default Alert;