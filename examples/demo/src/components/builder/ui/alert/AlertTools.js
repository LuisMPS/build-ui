import {branch, DnDBuilder, item, useTools} from 'build-ui'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import useStyle from './style/AlertTools';
import clsx from 'clsx';

const AlertTools = ({
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
        const alertProps = {
            message: 'Beep!',
            color: 'secondary',
            variant: 'contained',
            text: 'Alert',
            style: {}
        }
        const alert = item({
            type: 'Alert',
            props: alertProps
        })
        const data = branch(alert);
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
        <NotificationsActiveIcon />
    </DnDBuilder>
}

export default AlertTools;