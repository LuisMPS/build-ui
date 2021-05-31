import React from "react";

const LinkRoot = React.forwardRef(({
    text,
    disabled,
    href,
    ...props
}, ref) => {
    return disabled 
    ? <span 
        ref = {ref}
        {...props}
    >
        {text}
    </span> 
    : <a 
        ref = {ref}
        href = {href}
        {...props}
    >
        {text}
    </a>
});

export default LinkRoot;