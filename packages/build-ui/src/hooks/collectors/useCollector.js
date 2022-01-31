import {shallowEqual, useSelector} from "react-redux";
import {getTree} from "../../selectors"
import {getNodeById, getNodeByIndex, getNodeByFilter, getNodeByFinder, getRootNode, getParentNode, getMetaById, getIndexesForId} from "../../selectors/tree"

const selectById = id => store => (
    getNodeById(getTree(store), id)
);
const selectByFilter = filter => store => (
    getNodeByFilter(getTree(store), filter)
);
const selectByFinder = finder => store => (
    getNodeByFinder(getTree(store), finder)
);
const selectByIndex = index => store => (
    getNodeByIndex(getTree(store), index)
);
const selectParent = id => store => (
    getParentNode(getTree(store), id)
);
const selectRoot = () => store => (
    getRootNode(getTree(store))
);

const useCollector = ({
    selector = () => {}
}) => {
    const selectors = {
        selectById: selectById,
        selectByFilter: selectByFilter,
        selectByFinder: selectByFinder,
        selectByIndex: selectByIndex,
        selectParent: selectParent,
        selectRoot: selectRoot,
    };
    const chosen = selector(selectors)
    const node = useSelector(
        chosen,
    );
    const id = node && node.id;
    const metaSelector = store => (
        getMetaById(getTree(store), id)
    );
    const meta = useSelector(
        metaSelector,
    );
    const indexSelector = store => (
        getIndexesForId(getTree(store), id)
    );
    const indexing = useSelector(
        indexSelector,
        shallowEqual,
    );
    const handler = {
        get: function(target, name) {
            return target.includes(name);
        }
    }
    const indexes = new Proxy(
        indexing, 
        handler
    );
    const collectorBag = {
        node: node,
        meta: meta,
        indexes: indexes,
    }
    const bag = {
        ...collectorBag,
    }
    return bag;
}

export default useCollector;