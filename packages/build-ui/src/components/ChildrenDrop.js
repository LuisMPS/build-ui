import React from 'react';
import DnDBuilder from './DnDBuilder';

const ChildrenDrop = ({
    children,
    onDrop,
    ...props
}) => {
    return React.Children.map(children,
        (child, index) => {
        const handleDrop = pos => e => onDrop(e, pos);
        return <React.Fragment>
            <DnDBuilder
                onDrop = {handleDrop(index)}
                {...props}
            >
            {child}
            </DnDBuilder>
        </React.Fragment>
    });
}

export default ChildrenDrop;