import React from 'react';
import DnDListener from "./DnDListener";

const DnDBuilder = React.forwardRef(function DnDBuilder({
    ...props
}, ref) {
    // Listen to builder
    // drag and drop operations
    // only
    return <DnDListener 
        {...props}
        ref = {ref}
        listenTransferType = 'builder'
    />
});

export default DnDBuilder;