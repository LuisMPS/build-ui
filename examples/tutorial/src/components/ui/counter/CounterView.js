import {DnDBuilder, useEditor} from "build-ui";
import Counter from "./Counter";

const CounterView = ({
    id,
    ...props
}) => {
    const handleButton = event => {
        event.stopPropagation();
    }
    const editor = useEditor({
        id: id
    });
    const {
        handlePanel,
        handleDragStart,
        handleDragEnd,
    } = editor;
    return <DnDBuilder
        onClick = {handlePanel}
        onDragStart = {handleDragStart}
        onDragEnd = {handleDragEnd}
        draggable = {true}
    >
        <Counter
            {...props} 
            onAdd = {handleButton}
            onSubstract = {handleButton}
        />
    </DnDBuilder>
}

export default CounterView;