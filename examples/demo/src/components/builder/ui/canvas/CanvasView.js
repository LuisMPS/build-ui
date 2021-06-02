import {useRef} from 'react';
import {DnDBuilderHOC} from 'build-ui';
import useDemoEditor from '../../../../hooks/useDemoEditor';
import usePositioner from '../../../../hooks/usePositioner';
import useExtractor from '../../../../hooks/useExtractor';
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
    const ref = useRef();
    useExtractor(id, ref);
    return <BuilderCanvas
        // DnD Props
        onDrop = {editor.handleDrop}
        onDragEnter = {editor.onDragEnter(editor.handlePaintDropZone)}
        onDragLeave = {editor.handleEraseDropZone}
        // Other Props
        onClick = {editor.handleSelect}
        className = {classes.view}
        ref = {ref}
        // Canvas Props
        {...props}
    />
}

export default CanvasView;