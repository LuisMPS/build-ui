import {DnDBuilderHOC} from 'build-ui'
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from '../../../../hooks/useDemoStyler';
import usePositioner from '../../../../hooks/usePositioner';
import Resizable from '../../../resize/Resizable';
import Section from './Section';
import useStyle from './style/SectionView';

const ResizableSection = Resizable(Section);
const BuilderSection = DnDBuilderHOC(ResizableSection);

const SectionView = ({
    id,
    ...props
}) => {
    const positioner = usePositioner();
    const editor = useDemoEditor({
        id: id,
        onDropDone: 
        positioner.onDropDonePositioned
    });
    const styler = useDemoStyler({
        id: id
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        hovering: editor.hovering,
        fixed: editor.meta.fixed,
    });
    return <BuilderSection
        // DnD Props 
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        onDrop = {editor.handleDrop}
        onDragEnter = {editor.onDragEnter(editor.handlePaintDropZone)}
        onDragLeave = {editor.handleEraseDropZone}
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
        onClick = {editor.handleSelect}
        className = {classes.view} 
        // Section Props
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default SectionView;