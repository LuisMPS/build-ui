import React, {useEffect, useState} from 'react';
import {DnDBuilderHOC} from 'build-ui'
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from '../../../../hooks/useDemoStyler';
import Resizable from '../../../resize/Resizable';
import Text from './Text';
import TextInput from './TextInput';
import useStyle from './style/TextView';

const BuilderText = DnDBuilderHOC(Resizable(Text));
const BuilderTextInput = DnDBuilderHOC(Resizable(TextInput));

const TextPreview = ({
    id,
    ...props
}) => {
    const editor = useDemoEditor({
        id: id,
    });
    const styler = useDemoStyler({
        id: id
    });
    const [editing, setEditing] = useState(false);
    const handleSelect = event => {
        editor.handleSelect(event);
        setEditing(true);
    }
    const selected = editor.indexes.selected; 
    useEffect(() => {
        if (selected) return;
        setEditing(false);
    }, [selected]);
    const classes = useStyle({
        selected: selected,
        fixed: editor.meta.fixed,
    });
    const BuilderTextComponent = (
        !editing 
        ? BuilderText 
        : BuilderTextInput
    );
    return <BuilderTextComponent
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
        className = {classes.view}
        onClick = {handleSelect}
        // Text Props
        {...(!editing && props)}
        // Text Input Props
        {...(editing && {
            name: 'text',
            value: props.text,
            onChange: editor.handleUpdate,
        })}
        style = {styler.completeStyle(props.style)}
    />

}

export default TextPreview;