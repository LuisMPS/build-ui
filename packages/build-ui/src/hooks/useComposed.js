import {useDispatch} from "react-redux";
import {createNodeBatched, createIndexBatched, createMetaBatched, createNodeUnrecorded, createIndexUnrecorded, createMetaUnrecorded, deleteMetaUnrecorded, deleteMetaBatched, deleteIndexBatched, deleteNodeBatched, deleteIndexUnrecorded, deleteNodeUnrecorded, replaceTreeUnrecorded} from "../slices/tree";
import {plainBranch} from "../utils/tree";
import {restartHistory} from "../slices/tree";

const useCreator = () => {
    const dispatch = useDispatch();
    // Not creating an unbatched 
    // version for create since
    // create actions must be 
    // registered on a single history
    // version.
    function handleCreateBatched(creation) {
        const branch = creation.node;
        const node = plainBranch(branch);
        dispatch(createNodeBatched({
            node: node,
            targetId: creation.targetId,
            position: creation.position,
        }));
        dispatch(createMetaBatched({
            meta: node.meta,
        }));
        dispatch(createIndexBatched({
            index: node.index,
            index_list: node.index_list,
        }));
    }
    function handleCreateUnrecorded(creation) {
        const branch = creation.node;
        const node = plainBranch(branch);
        dispatch(createNodeUnrecorded({
            node: node,
            targetId: creation.targetId,
            position: creation.position,
        }));
        dispatch(createMetaUnrecorded({
            meta: node.meta,
        }));
        dispatch(createIndexUnrecorded({
            index: node.index,
            index_list: node.index_list,
        }));
    }
    const handlers = {
        handleCreateBatched,
        handleCreateUnrecorded
    }
    const creatorBag = {
        
    }
    const bag = {
        ...creatorBag,
        ...handlers
    }
    return bag;
}

const useDeleter = () => {
    const dispatch = useDispatch();
    // Not creating an unbatched 
    // version for delete since
    // delete actions must be 
    // registered on a single history
    // version.
    function handleDeleteBatched(deletion) {
        const id = deletion.id;
        dispatch(deleteMetaBatched({
            id: id,
        }));
        dispatch(deleteIndexBatched({
            id: id
        }));
        // Delete node dispatch should
        // ALWAYS be last to allow before
        // delete dispatches to access 
        // node children.
        dispatch(deleteNodeBatched({
            id: id
        }));
    }
    function handleDeleteUnrecorded(deletion) {
        const id = deletion.id;
        dispatch(deleteMetaUnrecorded({
            id: id,
        }));
        dispatch(deleteIndexUnrecorded({
            id: id
        }));
        // Delete node is last.
        dispatch(deleteNodeUnrecorded({
            id: id
        }));
    }
    const handlers = {
        handleDeleteBatched,
        handleDeleteUnrecorded,
    }
    const deleterBag = {
        
    }
    const bag = {
        ...deleterBag,
        ...handlers
    }
    return bag;
}

const useReplacer = () => {
    const dispatch = useDispatch();
    function handleReplace(replace) {
        const branch = replace.tree;
        const tree = plainBranch(branch);
        dispatch(replaceTreeUnrecorded({
            tree: tree,
        }));
        // Restart history after
        // replacing tree since
        // tree replacement should 
        // not be recorded in history.
        dispatch(restartHistory())
    }
    const handlers = {
        handleReplace: handleReplace,
    }
    const replacerBag = {
        
    }
    const bag = {
        ...replacerBag,
        ...handlers
    }
    return bag;
}

export {useCreator, useDeleter, useReplacer};