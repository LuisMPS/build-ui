import MUIButton from "@material-ui/core/Button"
import clsx from "clsx";
import React from "react";
import useStyle from './style/Button'

const Button = React.forwardRef(({
    text,
    style,
    className,
    children,
    ...rest
}, ref) => {
    const classes = useStyle(style);
    const classButton = clsx(
        classes.button,
        classes.fill
    );
    const classAll = clsx(
        className,
        classes.ui
    );
    return <div
        className = {classAll}
    >
        <MUIButton 
            ref = {ref}
            className = {classButton}
            {...rest}
        >
            {text}
        </MUIButton>
        {children}
    </div> 
});

export default Button;