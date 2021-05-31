import {useState} from "react";
import {useActions} from "build-ui";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import useStyle from './style/ImagePanel';
import SizingPanel from "../../panels/SizingPanel";
import PositionPanel from "../../panels/PositionPanel";
import FlexItemPanel from "../../panels/FlexItemPanel";

const ImagePanel = ({
    id,
}) => {
    const actions = useActions();
    const editor = useDemoEditor({
        id: id
    });
    const styler = useDemoStyler({
        id: id
    });
    const [source, setSource] = useState(editor.props.src);
    const handleSourceChange = () => {
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {src: source}
        });
    }
    const handleChange = event => {
        setSource(event.target.value);
    }
    const classes = useStyle();
    return <div>

        <span className = {classes.field}>
        <label 
            htmlFor = 'link'
            className = {classes.label}
        >
            Image Link
        </label>
        <span className = {classes.input}>
            <TextField
                variant = 'outlined'
                id = 'link'
                value = {source}
                onChange = {handleChange}
                className = {classes.textInput}
            />
        </span>
        <span className = {classes.sourceChange}>
            <Button 
                color = 'primary'
                variant = 'outlined'
                onClick = {handleSourceChange}
                className = {classes.sourceButton}
            >
                Change Source
            </Button>
        </span>
        </span>

        {styler.styles.flexItem && <FlexItemPanel id = {id} />}
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default ImagePanel;