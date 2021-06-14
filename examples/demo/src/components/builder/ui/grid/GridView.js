import {DnDBuilderHOC} from 'build-ui'
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useStyle from './style/GridView';
import Grid from './Grid';

const BuilderGrid = DnDBuilderHOC(Grid);

const GridView = ({
    id,
    ...props
}) => {
    const editor = useDemoEditor({
        id: id,
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        hovering: editor.hovering,
        fixed: editor.meta.fixed,
    });
    return <BuilderGrid
        // DnD Props 
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        onDrop = {editor.props.container && editor.handleDrop}
        onDragEnter = {editor.handlePaintDropZone}
        onDragLeave = {editor.handleEraseDropZone}
        draggable = {!editor.meta.fixed}
        // Other Props
        onClick = {editor.handleSelect}
        className = {editor.node.childIds.length > 0 && classes.view} 
        // Grid Props
        {...props}
    />
}

export default GridView;