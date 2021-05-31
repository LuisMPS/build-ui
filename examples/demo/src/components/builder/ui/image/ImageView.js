import {DnDBuilderHOC} from "build-ui"
import Resizable from "../../../resize/Resizable";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import useStyle from "./style/ImageView";
import Image from "./Image";

const ResizableImage = Resizable(Image);
const BuilderImage = DnDBuilderHOC(ResizableImage);

const ImageView = ({
    id,
    ...props
}) => {
    const editor = useDemoEditor({
        id: id,
    });
    const styler = useDemoStyler({
        id: id
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        fixed: editor.meta.fixed,
    });
    return <BuilderImage
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        draggable = {!editor.meta.fixed}
        // Resize Props
        isResizing = {editor.indexes.selected}
        onResizeStart = {editor.handleResizeStart}
        onResize = {editor.handleResize}
        onResizeEnd = {editor.handleResizeEnd}
        // Pass down ref for
        // resize numerical 
        // calculations
        ref = {editor.builder}
        // Other Props
        className = {classes.view}
        onClick = {editor.handleSelect}
        // Image Props
        {...props}
        style = {styler.completeStyle(props.style)}
    />

}

export default ImageView;