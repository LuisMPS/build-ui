import React from 'react';
import Node from "./Node"

/*
 * Facade component
 * for Node. 
*/
const Workspace = ({
    view,
}) => {
    return <Node
        root = {true}
        view = {view}
    />
}

export default Workspace;