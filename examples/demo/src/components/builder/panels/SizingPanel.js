import TextField from "@material-ui/core/TextField";
import useDemoEditor from "../../../hooks/useDemoEditor";
import useStyle from "./style/Panel";

const SizingPanel = ({
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
            htmlFor = 'style.width'
            className = {classes.label}
        >
            Width
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.width'
            id = 'style.width'
            value = {editor.props.style.width || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.height'
            className = {classes.label}
        >
            Height
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.height'
            id = 'style.height'
            value = {editor.props.style.height || ''}
            onChange = {editor.handleUpdate} 
            className = {classes.input}
        />
        </div>

    </div>
}

export default SizingPanel;