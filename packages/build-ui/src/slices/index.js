import {combineReducers} from '@reduxjs/toolkit';
import tree from './tree';
import transfer from './transfer';

export default combineReducers({
    tree: tree.reducer,
    transfer: transfer.reducer,
});