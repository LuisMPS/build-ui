import TextField from "@material-ui/core/TextField";
import useDemoEditor from "../../../hooks/useDemoEditor";
import useStyle from "./style/Panel";

const SpacingPanel = ({
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
            htmlFor = 'style.padding'
            className = {classes.label}
        >
            Padding
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.padding'
            id = 'style.padding'
            value = {editor.props.style.padding || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.margin'
            className = {classes.label}
        >
            Margin
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.margin'
            id = 'style.margin'
            value = {editor.props.style.margin || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

    </div>
}

export default SpacingPanel;