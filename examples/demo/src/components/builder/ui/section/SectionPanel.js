import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import useDemoEditor from '../../../../hooks/useDemoEditor'
import useDemoStyler from '../../../../hooks/useDemoStyler';
import useStyle from './style/SectionPanel';
import {BackgroundPanel} from '../../panels/PalettePanel'
import SizingPanel from '../../panels/SizingPanel'
import PositionPanel from '../../panels/PositionPanel';
import FlexContainerPanel from '../../panels/FlexContainerPanel';
import FlexItemPanel from "../../panels/FlexItemPanel";

const SectionPanel = ({
    id,
}) => {
    const editor = useDemoEditor({
        id: id
    });
    const styler = useDemoStyler({
        id: id,
    })
    const classes = useStyle();
    return <div>

        <BackgroundPanel id = {id} />  

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.backgroundUrl'
            className = {classes.label}
        >
            Background URL
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.backgroundUrl'
            id = 'style.backgroundUrl'
            value = {editor.props.style.backgroundUrl || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.backgroundPosition'
            className = {classes.label}
        >
            Background Position
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.backgroundPosition'
            id = 'style.backgroundPosition'
            value = {editor.props.style.backgroundPosition || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.backgroundSize'
            className = {classes.label}
        >
            Background Size
        </label>
        <Select
            native = {true}
            variant = 'outlined'
            name = 'style.backgroundSize'
            value = {editor.props.style.backgroundSize || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'cover'>
                Cover
            </option>
            <option value = 'auto'>
                Auto
            </option>
        </Select>
        </div>

        {styler.styles.flexItem && <FlexItemPanel id = {id} />}
        <FlexContainerPanel id = {id} />        
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default SectionPanel;