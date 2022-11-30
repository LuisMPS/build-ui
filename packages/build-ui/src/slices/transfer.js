import {createSlice} from "@reduxjs/toolkit";
import preloadedTransfer from "./preloads/transfer";
import {
    updateTransfer as updateTransferReducer, 
    endTransfer as endTransferReducer
} from '../reducers/transfer';

const reducers = {
    updateTransfer: updateTransferReducer,
    endTransfer: endTransferReducer,
}

const transfer = createSlice({
    name: 'transfer',
    initialState: preloadedTransfer(),
    reducers: reducers,
});

const {
    updateTransfer,
    endTransfer,
} = transfer.actions;

export default transfer;

export {
    updateTransfer,
    endTransfer
};