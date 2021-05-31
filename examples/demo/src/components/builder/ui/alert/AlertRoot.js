import Button from "@material-ui/core/Button";
import React from "react";

const AlertRoot = React.forwardRef(({
    message,
    text,
    ...props
}, ref) => {
    const handleAlert = () => {
        alert(message);
    }
    return <Button
        ref = {ref}
        onClick = {handleAlert}
        {...props}
    >
        {text}
    </Button>
});

export default AlertRoot;