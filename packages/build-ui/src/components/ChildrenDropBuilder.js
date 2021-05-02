import React from 'react';
import ChildrenDropListener from './ChildrenDropListener';

const ChildrenDropBuilder = props => {
    return <ChildrenDropListener
        {...props}
        listenTransferType = 'builder' 
    />
}

export default ChildrenDropBuilder;