import {createSlice} from "@reduxjs/toolkit";
import {
    startTransfer as startTransferReducer, 
    endTransfer as endTransferReducer
} from '../reducers/transfer';

const initialState = {
    data: null,
    meta: null,
    type: null,
}

const reducers = {
    startTransfer: startTransferReducer,
    endTransfer: endTransferReducer,
}

const transfer = createSlice({
    name: 'transfer',
    initialState: initialState,
    reducers: reducers,
});

const reducer = transfer.reducer;
const {
    startTransfer,
    endTransfer,
} = transfer.actions;

export default reducer;
export {
    startTransfer,
    endTransfer
};