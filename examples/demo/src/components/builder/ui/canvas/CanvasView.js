import {DnDBuilderHOC} from 'build-ui';
import useDemoEditor from '../../../../hooks/useDemoEditor';
import usePositioner from '../../../../hooks/usePositioner';
import useStyle from './style/CanvasView';
import Canvas from './Canvas';

const BuilderCanvas = DnDBuilderHOC(Canvas);

const CanvasView = ({
    id,
    ...props
}) => {
    const positioner = usePositioner();
    const editor = useDemoEditor({
        id: id,
        onDropDone:
        positioner.onDropDonePositioned,
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        hovering: editor.hovering,
        fixed: true,
    });
    return <BuilderCanvas
        // DnD Props
        onDrop = {editor.handleDrop}
        onDragEnter = {editor.onDragEnter(editor.handlePaintDropZone)}
        onDragLeave = {editor.handleEraseDropZone}
        // Other Props
        onClick = {editor.handleSelect}
        className = {classes.view}
        // Canvas Props
        {...props}
    />
}

export default CanvasView;