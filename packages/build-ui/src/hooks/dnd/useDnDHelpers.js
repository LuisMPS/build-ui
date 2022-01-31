import {useSelector} from "react-redux";
import {getTransfer} from "../../selectors";
import {getTransferData, getTransferMeta} from "../../selectors/transfer";
import useEventHelpers from "../events/useEventHelpers";

const useDnDHelpers = params => {
    const transferSelector = store => (
        getTransfer(store)
    );
    const transfer = useSelector(
        transferSelector,
    );
    const events = useEventHelpers();
    function getDnDEventClientCoords(event) {
        return events.getEventClientCoords(event);
    }
    function getDnDEventPosition(event) { 
        return events.getEventPosition(event);
    }
    function getDragAndDrop() {
        const data = getTransferData(transfer);
        // In case drop is not
        // caused by an internal
        // action, such as dropping
        // a file or image. Or when
        // there is no active current
        // drag and drop action.
        if (!data) return null;
        const meta = getTransferMeta(transfer);
        const create = meta.create;
        if (create) return getDragAndDropCreate();
        else return getDragAndDropMove();
    }
    function getDragAndDropCreate() {
        const data = getTransferData(transfer);
        const meta = getTransferMeta(transfer);
        const rootId = data.root;
        const root = data.byIds[rootId];
        const bagDnD = {
            transfer: root,
            meta: meta,
        }
        return bagDnD;
    }
    function getDragAndDropMove() {
        const moved = getTransferData(transfer);
        const meta = getTransferMeta(transfer);
        const bagDnD = {
            transfer: moved,
            meta: meta,
        }
        return bagDnD;
    }
    const isTransfering = Boolean(
        transfer.data
    );
    const transferType = (
        params && 
        params.transferType
    );
    const isTransferingType = (
        isTransfering && 
        transfer.type === transferType
    );
    const flags = {
        isTransfering: isTransfering,
        isTransferingType: isTransferingType,
    };
    const utils = {
        getDnDEventPosition,
        getDnDEventClientCoords,
        getDragAndDrop,
    }
    const bag = {
        ...flags,
        ...utils,
    }
    return bag;
}

export default useDnDHelpers;