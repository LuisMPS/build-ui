import {useDispatch} from "react-redux";
import {createNode, deleteNode,  replaceTree, createMeta, deleteMeta, createIndex, deleteIndex} from "../slices/tree";
import {isBranch, normalizeBranch} from "../utils/tree";

const useCreator = () => {
    const dispatch = useDispatch();
    const meta = useMeta();
    function handleCreate(creation) {
        const branch = creation.node;
        const node = isBranch(branch) 
            ? normalizeBranch(branch)
            : branch;
        dispatch(createNode({
            node: node,
            targetId: creation.targetId,
            position: creation.position,
        }));
        dispatch(createIndex({
            index: node.index,
            index_list: node.index_list,
        }));
        meta.handleMetaCreate({
            meta: node.meta,
        });
    }
    const handlers = {
        handleCreate: handleCreate,
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
    const meta = useMeta();
    function handleDelete(deletion) {
        const id = deletion.id;
        dispatch(deleteIndex({
            id: id
        }));
        meta.handleMetaDelete({
            id: id,
        });
        // Delete node dispatch should
        // ALWAYS be last to allow before
        // delete dispatches to access 
        // node children.
        dispatch(deleteNode({
            id: id
        }));
    }
    const handlers = {
        handleDelete: handleDelete,
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
        const tree = isBranch(branch) 
            ? normalizeBranch(branch)
            : branch;
        dispatch(replaceTree({
            tree: tree,
        }));
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

const useMeta = () => {
    const dispatch = useDispatch();
    function handleMetaCreate(creation) {
        dispatch(createMeta({
            meta: creation.meta,
        }));
    }
    function handleMetaDelete(deletion) {
        dispatch(deleteMeta({
            id: deletion.id
        }));
    }
    const handlers = {
        handleMetaCreate,
        handleMetaDelete,
    }
    const creatorBag = {
        
    }
    const bag = {
        ...creatorBag,
        ...handlers
    }
    return bag;
}

export {useCreator, useDeleter, useReplacer};