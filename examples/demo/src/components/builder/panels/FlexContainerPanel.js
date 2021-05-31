import Select from '@material-ui/core/Select';
import useDemoEditor from "../../../hooks/useDemoEditor";
import useStyle from "./style/Panel";
import React from 'react';

const FlexContainerPanel = ({
    id,
    ...props
}) => {
    const editor = useDemoEditor({
        id: id
    });
    const classes = useStyle();
    return <div {...props}>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.display'
            className = {classes.label}
        >
            Display
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.display'
            id = 'style.display'
            value = {editor.props.style.display || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = '' />                
            <option value = 'flex'>
                Flex
            </option>
        </Select>
        </div>

        {editor.props.style.display === 'flex' && <React.Fragment>
        
        <div className = {classes.field}>
        <label 
            htmlFor = 'style.flexDirection'
            className = {classes.label}
        >
            Flex Direction
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.flexDirection'
            id = 'style.flexDirection'
            value = {editor.props.style.flexDirection || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'row'>
                Row
            </option>
            <option value = 'column'>
                Column
            </option>
        </Select>
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.alignItems'
            className = {classes.label}
        >
            Flex Align Items
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.alignItems'
            id = 'style.alignItems'
            value = {editor.props.style.alignItems || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'nowrap'>
                No Wrap
            </option>
            <option value = 'wrap'>
                Wrap
            </option>
        </Select>
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.alignItems'
            className = {classes.label}
        >
            Flex Align Items
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.alignItems'
            id = 'style.alignItems'
            value = {editor.props.style.alignItems || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'flex-start'>
                Flex Start
            </option>
            <option value = 'center'>
                Flex Center
            </option>
            <option value = 'flex-end'>
                Flex End
            </option>
            <option value = 'stretch'>
                Stretch
            </option>
        </Select>
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.justifyContent'
            className = {classes.label}
        >
            Flex  Justify Content
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.justifyContent'
            id = 'style.justifyContent'
            value = {editor.props.style.justifyContent || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'flex-start'>
                Flex Start
            </option>
            <option value = 'center'>
                Flex Center
            </option>
            <option value = 'flex-end'>
                Flex End
            </option>
            <option value = 'space-evenly'>
                Space Evenly
            </option>
        </Select>
        </div>

        </React.Fragment>}

    </div>
}

export default FlexContainerPanel;