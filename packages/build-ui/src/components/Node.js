import React from 'react';
import useCollector from "../hooks/collectors/useCollector";

const Node = ({
    id,
    view,
    shallow,
}) => {

    const selector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: selector
    });

    const node = collected.node;
    const {
        type,
        props,
        childIds,
    } = node;

    const Resolved = view[type];

    const render = Boolean(
        Resolved
    );

    // Render as resolved type, with 
    // props pass taken from tree props 
    // and render children as subtree
    // nodes.
    return render
    ? <Resolved 
        {...props} 
        id = {node.id}
    >
        {!shallow && childIds.length > 0
        ? childIds.map(
        childId => (
        <Node 
            key = {childId}
            id = {childId}
            view = {view}
        />
        )) : null
        }
    </Resolved> 
    : null;
}

export default Node;