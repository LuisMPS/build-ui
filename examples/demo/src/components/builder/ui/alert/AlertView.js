import {DnDBuilderHOC} from "build-ui"
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import Alert from "./Alert";
import useStyle from "./style/AlertView";

const BuilderAlert = DnDBuilderHOC(Alert);

const AlertView = ({
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
    return <BuilderAlert
        // DnD Props
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        draggable = {!editor.meta.fixed}
        // Other Props
        onClick = {editor.handleSelect}
        className = {classes.view}
        // Alert Props
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default AlertView;