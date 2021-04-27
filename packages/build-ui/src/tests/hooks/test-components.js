import {useEffect} from 'react';

import useBuilder from '../../hooks/useBuilder';

const HookTestComponent = ({
    onTree= () => {},
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

export {HookTestComponent};