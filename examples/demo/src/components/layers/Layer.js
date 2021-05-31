import {useCollector} from "build-ui";

const Layer = ({
    id,
    view,
    depth,
}) => {
    const selector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: selector
    });
    const node = collected.node;
    const type = node.type;
    const Resolved = view[type];
    const render = Boolean(Resolved);
    return render 
    ? <Resolved 
        id = {id}
        depth = {depth}
    >
    {node.childIds.map(id => (
        <Layer 
            key = {id}
            id = {id}
            view = {view}
            depth = {depth + 1}
        />
    ))}
    </Resolved>
    : null;
}

export default Layer;