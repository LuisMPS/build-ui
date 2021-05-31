import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import useDemoEditor from "../../../hooks/useDemoEditor";
import useStyle from "./style/Panel";

const FontPanel = ({
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
            htmlFor = 'style.fontSize'
            className = {classes.label}
        >
            Text Size
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.fontSize'
            id = 'style.fontSize'
            value = {editor.props.style.fontSize || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.fontWeight'
            className = {classes.label}
        >
            Text Boldness
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.fontWeight'
            id = 'style.fontWeight'
            value = {editor.props.style.fontWeight || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.fontFamily'
            className = {classes.label}
        >
            Text Font
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.fontFamily'
            id = 'style.fontFamily'
            value = {editor.props.style.fontFamily || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'Times New Roman'>
                Times New Roman
            </option>
            <option value = 'Courier New'>
                Courier New
            </option>
            <option value = 'Roboto'>
                Roboto
            </option>
            <option value = 'KoHo'>
                KoHo
            </option>
        </Select>
        </div>
    
        <div className = {classes.field}>
        <label 
            htmlFor = 'style.textAlign'
            className = {classes.label}
        >
            Text Align
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.textAlign'
            id = 'style.textAlign'
            value = {editor.props.style.textAlign || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'left'>
                Left
            </option>
            <option value = 'center'>
                Center
            </option>
            <option value = 'right'>
                Right
            </option>
            <option value = 'justify'>
                Justify
            </option>
        </Select>
        </div>

    </div>
}

export default FontPanel;
