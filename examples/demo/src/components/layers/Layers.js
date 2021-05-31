import {useCollector, ViewProvider} from "build-ui";
import Layer from "./Layer";

const Layers = ({
    view,
}) => {
    const selector = selectors => (
        selectors.selectRoot()
    );
    const collected = useCollector({
        selector: selector
    });
    const root = collected.node;
    return root ? <ViewProvider view = {view}>
        <Layer 
            id = {root.id}
            view = {view}
            depth = {0}
        />
    </ViewProvider>
    : null;
}

export default Layers;