import {useState} from "react";
import DnDLayers from "../DnDLayers";
import useDemoLayers from "./hooks/useDemoLayers";
import useStyle from "./styles/LayerDroppable";
import LayerDetail from "./LayerDetail";
import LayerChild from "./LayerChild";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

const LayerDroppable = ({
    id,
    depth,
}) => {
    const root = depth === 0;
    const layers = useDemoLayers({
        id: id
    });
    const handleDrop = (
        !root 
        ? layers.handleDelegatedDrop 
        : layers.handleDrop
    );
    const handleDragOver = (
        !root &&
        layers.handleDelegatedDragOver
    );
    // Only expand for topmost 
    const [expanded, setExpanded] = useState(root);
    const handleToggleExpand = event => {
        event.stopPropagation();
        setExpanded(expanded => !expanded);
    }
    const classes = useStyle({
        border: layers.hover === layers.HOVER_INSIDE,
        expanded: expanded,
    });
    return <DnDLayers
        onDragStart = {layers.handleDragStart}
        onDragEnd = {layers.handleDragEnd}
        onDragEnter = {layers.handleDragEnter}
        onDragLeave = {layers.handleDragLeave}
        onDragOver = {handleDragOver}
        onDrop = {handleDrop}
        className = {classes.droppable}
    >
        <LayerDetail
            depth = {depth}
            draggable = {depth > 0}
            id = {id} 
        >
            <span onClick = {handleToggleExpand}> {expanded 
            ? <ArrowDropUp className = {classes.dropdownIcon} /> 
            : <ArrowDropDown className = {classes.dropdownIcon} />
            } </span>
        </LayerDetail>
        {layers.node.childIds.map((childId, index) => {
            const {handleChildYDrop} = layers; 
            const handleChildDrop = event => (
                handleChildYDrop(event, index)
            );
            return <LayerChild
                key = {childId}
                id = {childId}
                depth = {depth + 1}
                onDrop = {handleChildDrop}
                className = {classes.child}
            />
        })}
    </DnDLayers>
}

export default LayerDroppable;