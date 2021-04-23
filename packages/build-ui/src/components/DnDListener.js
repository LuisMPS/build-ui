import React from 'react';
import {useSelector} from "react-redux"
import {getTransfer} from "../selectors";
import {getTransferData, getTransferType} from "../selectors/transfer";
import DnDSource from "./DnDSource";

const DnDListener = ({
    listenAny = false,
    listenTransferType,
    ...props
}) => {
    // Component to decouple
    // builder logic from drag
    // and drop source's logic
    const selector = store => (
        getTransfer(store)
    );
    const transfer = useSelector(
        selector
    );
    const transferData = (
        getTransferData(transfer)
    );
    const transferType = (
        getTransferType(transfer)
    );
    const isType = (
        listenAny || 
        listenTransferType === transferType
    );
    const isDragging = (
        transferData && isType
    );
    return <DnDSource 
        {...props}
        isDragging = {isDragging}
    />
}

export default DnDListener;