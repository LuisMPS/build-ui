import {useTools, DnDBuilder, branch, item} from 'build-ui'

const CounterTools = () => {
    const tools = useTools();
    const {
        triggerDragStart,
        handleDragEnd,
        // Be aware that you can also 
        // add components to the builder
        // in any way you want to.
    } = tools;
    const handleCreate = event => {
        event.stopPropagation();
        const counterProps = {
            initialCount: 0,
            counterText: 'My value is:'
        };
        const data = branch(
            item({
                type: 'Counter',
                props: counterProps
            })
        );
        triggerDragStart({
            data: data,
        });
    }
    return <DnDBuilder
        onDragStart = {handleCreate}
        onDragEnd = {handleDragEnd}
        draggable = {true}
        style = {{touchAction: 'none'}}
    >
        <p>Counter Drag</p>
    </DnDBuilder>
}

export default CounterTools;