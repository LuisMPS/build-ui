import React from 'react';
import useCollector from "../hooks/collectors/useCollector";

const Node = ({
    id,
    root,
    view,
}) => {
    // Root has priority over ID.
    const selector = id && !root
    ? selectors => (
        selectors.selectById(id)
    )
    : selectors => (
        selectors.selectRoot()
    )
    const collected = useCollector({
        selector: selector
    });

    const node = collected.node || {};
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
        {childIds.length > 0
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