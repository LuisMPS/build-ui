import {branch, DnDBuilder, item, useTools} from 'build-ui'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import useStyle from './style/SectionTools';
import clsx from 'clsx';

const SectionTools = ({
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
        const sectionStyle = {
            width: 400,
            height: 200,
            backgroundColor: '#3e4aab',
        }
        const sectionProps = {
            style: sectionStyle,
        }
        const section = item({
            type: 'Section',
            props: sectionProps
        })
        const data = branch(section);
        tools.triggerDragStart({
            data: data,
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        className = {classAll}
        {...rest}
    >
        <CheckBoxOutlineBlankIcon />
    </DnDBuilder>
}

export default SectionTools;