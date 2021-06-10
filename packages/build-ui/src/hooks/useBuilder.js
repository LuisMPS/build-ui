import {useReplacer} from "./useComposed";
import useBuilderContext from "./useBuilderContext";
import useVersion from "./useVersion";
import {getTreeFromHistory} from "../selectors/tree";

const useBuilder = () => {
    const version = useVersion();
    const replacer = useReplacer();
    const tree = getTreeFromHistory(
        version.history
    );
    const context = useBuilderContext();
    const batcher = context.batcher;
    function json() {
        return tree;
    }
    function loadTree(tree) {
        batcher.abort();
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