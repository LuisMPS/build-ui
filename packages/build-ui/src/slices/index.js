import {combineReducers} from '@reduxjs/toolkit';
import treeReducer from './tree';
import transferReducer from './transfer';

export default combineReducers({
    tree: treeReducer,
    transfer: transferReducer,
})