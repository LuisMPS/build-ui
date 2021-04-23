import {useDispatch, useSelector} from "react-redux"
import {getTreeHistory, getTreeSlice} from "../selectors"
import {redoHistory, undoHistory} from "../slices/tree";
import {getCanRedo, getCanUndo} from "../history/selectors/history";


const useVersion = () => {
    const dispatch = useDispatch();
    const history = useSelector(
        getTreeHistory
    );
    // console.log(slice);
    function handleUndo() {
        dispatch(undoHistory({}))
    }
    function handleRedo() {
        dispatch(redoHistory({}))
    }
    const redoSelector = store => getCanRedo(
        getTreeSlice(store)
    );
    const canRedo = useSelector(
        redoSelector
    );
    const undoSelector = store => getCanUndo(
        getTreeSlice(store)
    );
    const canUndo = useSelector(
        undoSelector
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