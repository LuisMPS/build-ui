import React, {useEffect} from 'react';

import useBuilder from '../../hooks/useBuilder';

const TreeTestComponent = ({
    onTree = () => {},
}) => {
    const builder = useBuilder();
    const tree = builder.json();
    useEffect(() => {
        onTree(tree);
    }, [
        tree,
        onTree,
    ]);
    return null;
}

const ViewTestComponent = ({
    id,
    ...props
}) => {
    return <div {...props} />
}

export {TreeTestComponent, ViewTestComponent};