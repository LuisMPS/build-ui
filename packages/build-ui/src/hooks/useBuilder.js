import {useDispatch} from "react-redux";
import {useReplacer} from "./useComposed";
import useVersion from "./useVersion";
import {getTreeFromHistory} from "../selectors/tree";
import {restartHistory} from "../slices/tree";

const useBuilder = () => {
    const version = useVersion();
    const replacer = useReplacer();
    const tree = getTreeFromHistory(
        version.history
    );
    const dispatch = useDispatch();
    function json() {
        return tree;
    }
    function loadTree(tree) {
        // Restart history before
        // replacing tree since
        // tree replacement is not
        // recorded in history.
        dispatch(restartHistory())
        // Tree should include
        // tree meta that will
        // be loaded.
        replacer.handleReplace({
            tree: tree
        });
    }
    const builderBag = {
        
    }
    const utils = {
        json,
        loadTree,
    }
    const bag = {
        ...builderBag,
        ...version,
        ...utils,
    }
    return bag;
}

export default useBuilder;