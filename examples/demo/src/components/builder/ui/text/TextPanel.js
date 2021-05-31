import TextField from '@material-ui/core/TextField';
import useDemoEditor from '../../../../hooks/useDemoEditor';
import useDemoStyler from '../../../../hooks/useDemoStyler';
import useStyle from './style/TextPanel';
import FontPanel from '../../panels/FontPanel';
import {ColorPanel} from '../../panels/PalettePanel';
import PositionPanel from '../../panels/PositionPanel';
import SpacingPanel from '../../panels/SpacingPanel';
import FlexItemPanel from "../../panels/FlexItemPanel";
import SizingPanel from '../../panels/SizingPanel';

const TextPanel = ({
    id,
}) => {
    const editor = useDemoEditor({
        id: id
    });
    const styler = useDemoStyler({
        id: id
    });
    const classes = useStyle();
    return <div>

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

        {styler.styles.flexItem && <FlexItemPanel id = {id} />}
        <SpacingPanel id = {id} />
        <ColorPanel id = {id} />
        <FontPanel id = {id} />
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />

    </div> 
}

export default TextPanel;