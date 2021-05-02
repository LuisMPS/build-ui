import React from 'react';
import DnDListener from './DnDListener';

const ChildrenDropListener = ({
    children,
    onDrop,
    ...props
}) => {
    return React.Children.map(children,
        (child, index) => {
        const handleDrop = pos => e => onDrop(e, pos);
        return <React.Fragment>
            <DnDListener
                onDrop = {handleDrop(index)}
                {...props}
            >
            {child}
            </DnDListener>
        </React.Fragment>
    });
}

export default ChildrenDropListener;