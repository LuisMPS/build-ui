import {branch, DnDBuilder, item, useTools} from 'build-ui'
import LinkIcon from '@material-ui/icons/Link';
import useStyle from './style/LinkTools';
import clsx from 'clsx';

const LinkTools = ({
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
        const linkStyle = {
            color: '#f50057',
        }
        const linkProps = {
            text: 'Visit Repository',
            disabled: true,
            href: 'https://github.com/LuisMPS/build-ui',
            style: linkStyle,
        }
        const link = item({
            type: 'Link',
            props: linkProps
        })
        const data = branch(link);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        className = {classAll}
        {...rest}
    >
        <LinkIcon />
    </DnDBuilder>
}

export default LinkTools;