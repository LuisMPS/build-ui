import createVersionedSlice from '../history/wrappers/createVersionedSlice';
import {branch, normalizeBranch} from '../utils/tree';
import {
    createNode as createNodeReducer,
    deleteNode as deleteNodeReducer,
    intershiftNode as intershiftNodeReducer,
    moveNode as moveNodeReducer,
    replaceTree as replaceTreeReducer,
    updateNode as updateNodeReducer,
    rewriteNode as rewriteNodeReducer,
    createMeta as createMetaReducer,
    deleteMeta as deleteMetaReducer,
    updateMeta as updateMetaReducer,
    createIndex as createIndexReducer,
    deleteIndex as deleteIndexReducer,
    addIndex as addIndexReducer,
    removeIndex as removeIndexReducer,
    toggleIndex as toggleIndexReducer,
    clearIndex as clearIndexReducer,
    addListIndex as addListIndexReducer,
    removeListIndex as removeListIndexReducer,
    toggleListIndex as toggleListIndexReducer,
    clearListIndex as clearListIndexReducer,
} from '../reducers/tree';

const initialTree = branch();
const initialState = normalizeBranch(initialTree);

const reducers = {
    createNode: createNodeReducer,
    deleteNode: deleteNodeReducer,
    intershiftNode: intershiftNodeReducer,
    moveNode: moveNodeReducer,
    replaceTree: replaceTreeReducer,
    rewriteNode: rewriteNodeReducer,
    updateNode: updateNodeReducer,
    createMeta: createMetaReducer,
    deleteMeta: deleteMetaReducer,
    updateMeta: updateMetaReducer,
    createIndex: createIndexReducer,
    deleteIndex: deleteIndexReducer,
    addIndex: addIndexReducer,
    removeIndex: removeIndexReducer,
    toggleIndex: toggleIndexReducer,
    clearIndex: clearIndexReducer,
    addListIndex: addListIndexReducer,
    removeListIndex: removeListIndexReducer,
    toggleListIndex: toggleListIndexReducer,
    clearListIndex: clearListIndexReducer,
}

const tree = createVersionedSlice({
    name: 'tree',
    initialState: initialState,
    reducers: reducers,
});

const batched = tree.extraActions.batched;
// Yet to implement.
const unbatched = tree.extraActions.unbatched;
const unrecorded = tree.extraActions.unrecorded;

const actions = tree.actions;

const {
    createNode,
    deleteNode,
    intershiftNode,
    moveNode,
    updateNode,
    rewriteNode,
    createMeta,
    deleteMeta,
    updateMeta,
    createIndex,
    deleteIndex,
    addIndex,
    removeIndex,
    toggleIndex,
    clearIndex,
    addListIndex,
    removeListIndex,
    toggleListIndex,
    clearListIndex,
} = batched;

const {
    replaceTree
} = unrecorded;

const {
    undoHistory,
    redoHistory,
    restartHistory,
    commitHistory,
    configureHistory,
    configureBatchHistory,
} = actions;

export default tree;

export {
    createNode,
    deleteNode, 
    intershiftNode,
    moveNode,
    updateNode,
    rewriteNode,
    replaceTree,
    createMeta,
    deleteMeta,
    updateMeta,
    createIndex,
    deleteIndex,
    addIndex,
    removeIndex,
    toggleIndex,
    clearIndex,
    addListIndex,
    removeListIndex,
    toggleListIndex,
    clearListIndex,
    undoHistory,
    redoHistory,
    restartHistory,
    commitHistory,
    configureHistory,
    configureBatchHistory,
};