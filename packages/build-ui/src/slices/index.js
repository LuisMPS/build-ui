import {combineReducers} from '@reduxjs/toolkit';
import tree from './tree';
import transfer from './transfer';
import {createVersionedState} from '../history/wrappers/createVersionedSlice';
import {plainBranch} from '../utils/tree';

export default combineReducers({
    tree: tree.reducer,
    transfer: transfer.reducer,
});

export const preloadedSlices = ({
    tree,
    transfer,
}) => ({
    // Will default to slice config
    // initialState prop, if key
    // is undefined.
    // @see: https://redux.js.org/recipes/structuring-reducers/initializing-state
    tree: tree && createVersionedState(plainBranch(tree)),
    transfer: transfer,
});