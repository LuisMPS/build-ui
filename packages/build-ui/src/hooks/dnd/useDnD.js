import {useSelector, useDispatch} from "react-redux";
import {getTransfer} from "../../selectors";
import {endTransfer, updateTransfer} from "../../slices/transfer";

const useDnD = ({
    transferType,
}) => {
    const dispatch = useDispatch();
    const transferSelector = store => (
        getTransfer(store)
    );
    const transfer = useSelector(
        transferSelector,
    );
    const isTransfering = Boolean(
        transfer.data
    );
    const isTransferingType = (
        isTransfering && 
        transfer.type === transferType
    );
    function triggerUpdate(transfer) {
        dispatch(updateTransfer(transfer));
    }
    function triggerEnd() {
        dispatch(endTransfer({}));
    }
    const data = {
        transfer: transfer,
    }
    const flags = {
        isTransfering: isTransfering,
        isTransferingType: isTransferingType,
    };
    const triggers = {
        triggerUpdate,
        triggerEnd,
    }
    const bag = {
        ...data,
        ...flags,
        ...triggers,
    }
    return bag;
}

export default useDnD;