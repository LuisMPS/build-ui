import TextField from '@material-ui/core/TextField';
import useDemoEditor from "../../../hooks/useDemoEditor";
import useStyle from "./style/Panel";

const FlexItemPanel = ({
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
            htmlFor = 'style.flexGrow'
            className = {classes.label}
        >
            Flex Grow
        </label>
        <TextField
            variant = 'outlined'
            type = 'number'
            name = 'style.flexGrow'
            id = 'style.flexGrow'
            value = {editor.props.style.flexGrow || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.flexShrink'
            className = {classes.label}
        >
            Flex Shrink
        </label>
        <TextField
            variant = 'outlined'
            type = 'number'
            name = 'style.flexShrink'
            id = 'style.flexShrink'
            value = {editor.props.style.flexShrink || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.flexBasis'
            className = {classes.label}
        >
            Flex Basis
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.flexBasis'
            id = 'style.flexBasis'
            value = {editor.props.style.flexBasis || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>      

    </div>
}

export default FlexItemPanel;