import TextField from "@material-ui/core/TextField";
import useDemoEditor from "../../../hooks/useDemoEditor";
import useStyle from "./style/Panel";

const PositionPanel = ({
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
            htmlFor = 'style.top'
            className = {classes.label}
        >
            Top
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.top'
            id = 'style.top'
            value = {editor.props.style.top || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.left'
            className = {classes.label}
        >
            Left
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.left'
            id = 'style.left'
            value = {editor.props.style.left || ''}
            onChange = {editor.handleUpdate} 
            className = {classes.input}
        />
        </div>

    </div>
}

export default PositionPanel;