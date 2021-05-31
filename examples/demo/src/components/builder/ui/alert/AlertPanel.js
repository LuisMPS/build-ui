import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useStyle from './style/AlertPanel';
import SizingPanel from "../../panels/SizingPanel";
import SpacingPanel from "../../panels/SpacingPanel";
import PositionPanel from "../../panels/PositionPanel";
import FlexItemPanel from "../../panels/FlexItemPanel";

const AlertPanel = ({
    id,
}) => {
    const editor = useDemoEditor({
        id: id,
    });
    const styler = useDemoStyler({
        id: id
    });
    const classes = useStyle();
    return <div>

        {/* Button Props */}

        <div className = {classes.field}>
        <label 
            htmlFor = 'color'
            className = {classes.label}
        >
            Type
        </label>
        <Select
            native = {true}
            variant = 'outlined'
            value = {editor.props.color}
            id = 'color'
            name = 'color' 
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'primary'>
                Primary
            </option>
            <option value = 'secondary'>
                Secondary
            </option>
        </Select>
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'variant'
            className = {classes.label}
        >
            Fill
        </label>
        <Select 
            native = {true}
            variant = 'outlined'
            value = {editor.props.variant} 
            name = 'variant'
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'contained'>
                Contained
            </option>
            <option value = 'outlined'>
                Outlined
            </option>
        </Select>
        </div>


        {/* Alert Props */}

        <div className = {classes.field}>
        <label 
            htmlFor = 'message'
            className = {classes.label}
        >
            Alert Message
        </label>
        <TextField
            variant = 'outlined'
            name = 'message'
            id = 'message'
            value = {editor.props.message}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'text'
            className = {classes.label}
        >
            Alert Text
        </label>
        <TextField
            variant = 'outlined'
            name = 'text'
            id = 'text'
            value = {editor.props.text}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        {/* Style Props */}

        {styler.styles.flexItem && <FlexItemPanel id = {id} />}
        <SizingPanel id = {id} />
        <SpacingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default AlertPanel;