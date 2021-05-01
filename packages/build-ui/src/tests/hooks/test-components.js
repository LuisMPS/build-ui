import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getTreeSlice} from '../../selectors';
import {getHistory} from '../../history/selectors/version';
import {getTreeFromHistory} from '../../selectors/tree';

const TreeTestComponent = ({
    onSlice = () => {},
    onHistory = () => {},
    onTree = () => {},
}) => {
    const selector = store => (
        getTreeSlice(store)
    );
    const slice = useSelector(
        selector
    );
    const history = getHistory(slice);
    const tree = getTreeFromHistory(history);
    useEffect(() => {
        onSlice(slice);
        onHistory(history);
        onTree(tree);
    }, [
        slice,
        tree,
        history,
        onSlice,
        onTree,
        onHistory,
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