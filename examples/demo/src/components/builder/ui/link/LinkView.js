import {DnDBuilderHOC} from "build-ui"
import Resizable from "../../../resize/Resizable";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import Link from "./Link";
import useStyle from "./style/LinkView";

const ResizableLink = Resizable(Link);
const BuilderLink = DnDBuilderHOC(ResizableLink);

const LinkView = ({
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
    // To prevent selection
    // on link click
    const handleLink = event => (
        event.stopPropagation()
    );
    return <BuilderLink
        // DnD Props
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
        onClick = {props.disabled ? editor.handleSelect : handleLink}
        className = {classes.view}
        // Link props
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default LinkView;