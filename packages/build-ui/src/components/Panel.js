import React from 'react';
import useCollector from "../hooks/collectors/useCollector";

const Panel = ({
    view,
}) => {
    const selector = selectors => (
        selectors.selectByIndex('panel')
    );
    const collected = useCollector({
        selector: selector,
    });
    const node = collected.node || {};
    const type = node.type;
    // Render as resolved type, with 
    // props pass
    const Resolved = view[type];
    return Resolved 
    ? <Resolved 
        id = {node.id}
    />
    : null;
}

export default Panel;