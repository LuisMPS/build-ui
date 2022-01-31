import React from 'react';
import useCollector from "../hooks/collectors/useCollector";
import {identity} from '../utils/function';

const Node = ({
    id,
    view,
    shallow,
    childrenAs = Node,
    filterProps = identity,
    ...rest
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

    const Child = childrenAs;

    const propsAll = filterProps({
        ...props,
        ...rest,
    });

    // Render as resolved type, with 
    // props pass taken from tree props 
    // and render children as subtree
    // nodes.
    return render
    ? <Resolved 
        {...propsAll}
        id = {node.id}
    >
        {!shallow && childIds.length > 0
        ? childIds.map(
        childId => (
        <Child
            key = {childId}
            id = {childId}
            view = {view}
            childrenAs = {childrenAs}
            filterProps = {filterProps}
            {...rest}
        />
        )) : []
        }
    </Resolved> 
    : null;
}

export default Node;