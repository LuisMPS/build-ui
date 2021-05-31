import DnDLayers from "../DnDLayers";
import LayerDetail from "./LayerDetail";
import useStyle from './styles/LayerDraggable';
import useDemoLayers from "./hooks/useDemoLayers";

const LayerDraggable = ({
    id,
    depth,
}) => {
    const layers = useDemoLayers({
        id: id
    })
    const classes = useStyle();
    return <DnDLayers
        onDragStart = {layers.handleDragStart}
        onDragEnd = {layers.handleDragEnd}
        className = {classes.draggable}
        draggable = {true}
    >
        <LayerDetail 
            id = {id} 
            depth = {depth}
            draggable = {true}
        />
    </DnDLayers>
}

export default LayerDraggable;