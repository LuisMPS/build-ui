import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useStyle from './style/LinkPanel'; 
import SizingPanel from "../../panels/SizingPanel";
import FontPanel from "../../panels/FontPanel";
import SpacingPanel from "../../panels/SpacingPanel";
import FlexItemPanel from "../../panels/FlexItemPanel";
import {ColorPanel} from "../../panels/PalettePanel";
import useDemoStyler from "../../../../hooks/useDemoStyler";

const LinkPanel = ({
    id,
}) => {
    const editor = useDemoEditor({
        id: id
    });
    const styler = useDemoStyler({
        id: id,
    });
    const classes = useStyle();
    return <div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'href'
            className = {classes.label}
        >
            Link to
        </label>
        <TextField
            variant = 'outlined'
            name = 'href'
            id = 'href'
            value = {editor.props.href}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'text'
            className = {classes.label}
        >
            Text
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

        <div className = {classes.field}>
        <label 
            htmlFor = 'disabled'
            className = {classes.label}
        >
            Disabled
        </label>
        <span className = {classes.input}>
            <Checkbox
                name = 'disabled'
                id = 'disabled'
                checked = {editor.props.disabled}
                onChange = {editor.handleUpdate}
            />
        </span>
        </div>

        {styler.styles.flexItem && <FlexItemPanel id = {id} />}
        <ColorPanel id = {id} />
        <SpacingPanel id = {id} />
        <SizingPanel id = {id} />
        <FontPanel id = {id} />

    </div>
}

export default LinkPanel;