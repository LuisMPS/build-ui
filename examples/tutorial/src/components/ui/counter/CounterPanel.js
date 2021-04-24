import {useEditor} from "build-ui"

const CounterPanel = ({
    id,
}) => {
    const editor = useEditor({
        id: id
    });
    const {
        handleUpdate,
        props
    } = editor;
    return <div>
        <input
            name = 'counterText'
            value = {props.counterText}
            onChange = {handleUpdate}
        />
    </div>
}

export default CounterPanel;