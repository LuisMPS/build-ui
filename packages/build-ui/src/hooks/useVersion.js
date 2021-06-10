import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {getTreeHistory, getTreeSlice} from "../selectors"
import {redoHistory, undoHistory} from "../slices/tree";
import {getCanRedo, getCanUndo} from "../history/selectors/history";
import useBuilderContext from "./useBuilderContext";


const useVersion = () => {
    const dispatch = useDispatch();
    const history = useSelector(
        getTreeHistory
    );
    const context = useBuilderContext();
    const batcher = context.batcher;
    // console.log(history);
    function handleUndo() {
        batcher.abort();
        dispatch(undoHistory({}));
    }
    function handleRedo() {
        batcher.abort();
        dispatch(redoHistory({}))
    }
    const redoSelector = store => getCanRedo(
        getTreeSlice(store)
    );
    const canRedo = useSelector(
        redoSelector,
        shallowEqual
    );
    const undoSelector = store => getCanUndo(
        getTreeSlice(store)
    );
    const canUndo = useSelector(
        undoSelector,
        shallowEqual
    );
    const historyBag = {
        history: history,
        canUndo: canUndo,
        canRedo: canRedo,
    }
    const handlers = {
        handleUndo,
        handleRedo,
    }
    const bag = {
        ...historyBag,
        ...handlers,
    }
    return bag;
}

export default useVersion;