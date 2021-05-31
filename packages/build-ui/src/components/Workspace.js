import React from 'react';
import useCollector from '../hooks/collectors/useCollector';
import ViewProvider from './View';
import Node from "./Node"

/*
 * Facade component
 * for Node. 
*/
const Workspace = ({
    view,
}) => {
    const selector = selectors => (
        selectors.selectRoot()
    );
    const collected = useCollector({
        selector: selector
    });
    const node = collected.node;
    return node 
    ? <ViewProvider view = {view}>
        <Node
            id = {node.id}
            view = {view}
        />
    </ViewProvider>
    : null;
}

export default Workspace;