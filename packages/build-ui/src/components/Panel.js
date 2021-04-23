import React from 'react';
import NodePanel from "./NodePanel"

/*
 * Facade component
 * for NodePanel. 
*/
const Panel = ({
    view
}) => {
    return <NodePanel 
        view = {view}
    />
}

export default Panel;