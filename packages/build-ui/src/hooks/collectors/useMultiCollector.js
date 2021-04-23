import {shallowEqual, useSelector} from "react-redux";
import {getTree} from "../../selectors"
import {getChildrenById, getParentsById, getDirectChildrenById, getMultipleById, getMultipleIndexesForId, getMultipleMetaById} from "../../selectors/tree"
import {deepEqual, keys, values} from "../../utils/object";

const selectMultipleById = (...id) => store => (
    getMultipleById(getTree(store), ...id)
);
const selectParentsById = id => store => (
    getParentsById(getTree(store), id)
);
const selectChildrenById = id => store => (
    getChildrenById(getTree(store), id)
);
const selectDirectChildrenById = id => store => (
    getDirectChildrenById(getTree(store), id)
);

const useMultiCollector = ({
    selector = () => {}
}) => {
    const selectors = {
        selectMultipleById,
        selectParentsById,
        selectChildrenById,
        selectDirectChildrenById,
    };
    const chosen = selector(selectors) 
    const nodes = useSelector(
        chosen,
        shallowEqual
    );
    function listIds() {
        return keys(nodes);
    }
    function listNodes() {
        return values(nodes);
    }
    const metaSelector = store => (
        getMultipleMetaById(
            getTree(store), 
            ...listIds()
        )
    );
    const meta = useSelector(
        metaSelector
    );
    function listMeta() {
        return values(meta);
    }
    const indexSelector = store => (
        getMultipleIndexesForId(
            getTree(store), 
            ...listIds()
        )
    );
    const indexing = useSelector(
        indexSelector,
        deepEqual,
    );
    const handler = {
        get: function(target, name) {
            return target.includes(name);
        }
    }
    const indexes = listIds().reduce((indexes, id) => {
        indexes[id] = new Proxy(
            indexing[id], 
            handler
        );
        return indexes;
    }, {});
    const collectorBag = {
        nodes: nodes,
        meta: meta,
        indexes: indexes,
    }
    const utils = {
        listIds,
        listNodes,
        listMeta,
    }
    const bag = {
        ...collectorBag,
        ...utils,
    }
    return bag;
}

export default useMultiCollector;