import {branch, DnDBuilder, item, useTools} from 'build-ui'
import useStyle from './style/TextTools';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import clsx from 'clsx';

const TextTools = ({
    className,
    ...rest
}) => {
    const classes = useStyle();
    const classAll = clsx(
        classes.tool,
        className,
    );
    const tools = useTools();
    const handleDragTool = () => {
        const textStyle = {
            color: '#000000',
            fontSize: 22,
            fontFamily: 'Arial',
        }
        const textProps = {
            text: 'My Text',
            style: textStyle,
        }
        const text = item({
            type: 'Text',
            props: textProps
        });
        const data = branch(text);
        tools.triggerDragStart({
            data: data
        })
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        className = {classAll}
        draggable = {true}
        {...rest}
    >
        <TextFieldsIcon />
    </DnDBuilder>
}

export default TextTools;