import {shallowEqual, useSelector} from "react-redux";
import {getTransfer} from "../../selectors";
import {getTransferData, getTransferMeta} from "../../selectors/transfer";

const useDnDHelpers = params => {
    const transferSelector = store => (
        getTransfer(store)
    );
    const transfer = useSelector(
        transferSelector,
        shallowEqual,
    );
    function getDnDEventPosition(event) {
        // In case event target is not 
        // an HTMLElement, must watch for
        // event target, since position
        // will be calculated with 
        // getBoundingClientRect function. 
        const getDnDEventTarget = event => (
            event.currentTarget === document 
            ? event.target
            : event.currentTarget
        );
        const eventX = (
            event.clientX ||
            (event.changedTouches &&  
            event.changedTouches[0].clientX) ||
            (event.touces &&  
            event.touches[0].clientX)
        );
        const eventY = (
            event.clientY || 
            (event.changedTouches &&  
            event.changedTouches[0].clientY) ||
            (event.touces &&
            event.touches[0].clientY)
        );
        const target = getDnDEventTarget(event);
        const {
            top, height,
            left, width,
        } = target.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        return {
            top: centerY > eventY,
            bottom: centerY <= eventY,
            left: centerX > eventX,
            right: centerX <= eventX,
        }
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
        if (!create) return getDragAndDropMove();
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
        getDragAndDrop,
    }
    const bag = {
        ...flags,
        ...utils,
    }
    return bag;
}

export default useDnDHelpers;