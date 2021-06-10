import {createSlice} from "@reduxjs/toolkit";
import preloadedTransfer from "./preloads/transfer";
import {
    startTransfer as startTransferReducer, 
    endTransfer as endTransferReducer
} from '../reducers/transfer';

const reducers = {
    startTransfer: startTransferReducer,
    endTransfer: endTransferReducer,
}

const transfer = createSlice({
    name: 'transfer',
    initialState: preloadedTransfer(),
    reducers: reducers,
});

const {
    startTransfer,
    endTransfer,
} = transfer.actions;

export default transfer;

export {
    startTransfer,
    endTransfer
};