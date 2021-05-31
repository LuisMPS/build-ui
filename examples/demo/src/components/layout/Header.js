import React from 'react';
import clsx from "clsx";
import useStyle from "./style/Header";

const Header = ({
    className,
    ...props
}) => {
    const classes = useStyle();
    const classAll = clsx(
        className,
        classes.header
    )
    return <header
        className = {classAll} 
        {...props}
    >
        <p className = {classes.title}>
            Build UI Demo
        </p>
    </header>
}

export default Header;