import React from 'react';
import DnDListener from "./DnDListener";

const DnDBuilder = ({
    ...props
}) => {
    // Listen to builder
    // drag and drop operations
    // only
    return <DnDListener 
        {...props}
        listenTransferType = 'builder'
    />
}

export default DnDBuilder;