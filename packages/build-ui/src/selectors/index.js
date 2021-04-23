import {getSlicePresent, getSliceHistory} from "../history/selectors/version";

const getTreeSlice = store => store.tree;
const getTreeHistory = store => getSliceHistory(store, 'tree');
const getTree = store => getSlicePresent(store, 'tree');

const getTransfer = store => store.transfer;

export {
    getTreeSlice,
    getTree,
    getTreeHistory,
    getTransfer,
}
