import {keys, values} from '../utils/object';

/*
 * These functions work with subset of store 
 * containing value of 'tree' in store 
 * dictionary.

 * As such, they do not expect to receive
 * the whole store as their first argument,
 * but a value containing only the store's
 * value for 'tree'
*/

const getTreeFromSlice = state => state.history.present;
const getTreeFromHistory = state => state.present;

// Direct selectors

const getNodeById = (state, id) => state.byIds[id];
const getNodeByFilter = (state, filter) => values(state.byIds).find(filter);
const getNodeByFinder = (state, finder) => getNodeById(state, finder(state));
const getNodeByIndex = (state, index) => state.byIds[state.index[index]];
const getRootNode = state => getNodeById(state, state.root);
const getParentNode = (state, id) => getNodeById(state, 
    getNodeById(state, id) && 
    getNodeById(state, id).parentId
);

const getMetaById = (state, id) => state.meta[id];

// Computed multi-selectors

const getMultipleById = (state, ...id) => {
    return id.reduce((list, id) => {
        list[id] = getNodeById(state, id);
        return list;
    }, {});
}

const getMultipleByFilter = (state, filter) => {
    const byIds = state.byIds;
    const ids = keys(byIds).reduce((list, id) => {
        if (filter(byIds[id])) list.push(id);
        return list;
    }, []);
    return getMultipleById(state, ...ids);
}

const getMultipleByFinder = (state, finder) => {
    const ids = finder(state);
    return getMultipleById(state, ...ids);
}

const getMultipleByIndex = (state, index) => {
    const ids = state.index_list[index] || [];
    return getMultipleById(state, ...ids);
}

const getParentsById = (state, id) => {
    let parentIds = [];
    let parent = getParentNode(state, id);
    while (parent) {
        parentIds = [...parentIds, parent.id];
        parent = getParentNode(state, parent.id);
    }
    return getMultipleById(state, ...parentIds);
}

const getDirectChildrenById = (state, id) => {
    let node = getNodeById(state, id);
    let childIds = node.childIds;
    return getMultipleById(state, ...childIds);
}

const getChildrenById = (state, id) => {
    let childrenIds = includeChildren(id);
    function includeChildren(id, childrenIds = []) {
        const node = getNodeById(state, id);
        return node.childIds.reduce((children, id) => {
            const childrenIds = [...children, id];
            return includeChildren(id, childrenIds);
        }, childrenIds);
    }
    return getMultipleById(state, ...childrenIds);
}

const getMultipleMetaById = (state, ...id) => {
    let nodes = getMultipleById(state, ...id);
    let nodesIds = keys(nodes);
    return nodesIds.reduce((meta, id) => {
        meta[id] = getMetaById(state, id);
        return meta;
    }, {});
}

// Computed selectors for indexes

const getIndexesForId = (state, id) => {
    const indexedID = keys(state.index).filter(index => (
        state.index[index] === id
    ));
    const indexedListID = keys(state.index_list).filter(index => (
        state.index_list[index].includes(id)
    ));
    // Sort to be able to compare
    return [...indexedID, ...indexedListID].sort();
}

const getMultipleIndexesForId = (state, ...id) => {
    let nodes = getMultipleById(state, ...id);
    let nodesIds = keys(nodes);
    return nodesIds.reduce((indexes, id) => {
        indexes[id] = getIndexesForId(state, id);
        return indexes;
    }, {});
}

export {
    // Misc. selectors
    getTreeFromSlice,
    getTreeFromHistory,
    // Single node selectors
    getNodeById,
    getNodeByFilter,
    getNodeByFinder,
    getNodeByIndex,
    getRootNode,
    getParentNode,
    // Multi node selectors
    getMultipleById,
    getMultipleByFilter,
    getMultipleByFinder,
    getMultipleByIndex,
    getParentsById,
    getChildrenById,
    getDirectChildrenById,
    // Single meta selectors
    getMetaById,
    // Multi meta selectors
    getMultipleMetaById,
    // Index selectors,
    getIndexesForId,
    // Multi index selectors
    getMultipleIndexesForId,
}