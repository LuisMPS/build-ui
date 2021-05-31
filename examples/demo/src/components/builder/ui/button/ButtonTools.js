import {branch, DnDBuilder, item, useTools} from "build-ui";
import useStyle from './style/ButtonTools';
import VignetteIcon from '@material-ui/icons/Vignette';
import clsx from "clsx";

const ButtonTools = ({
    className,
    ...rest
}) => {
    const classes = useStyle();
    const classAll = clsx(
        classes.tool,
        className,
    );
    const tools = useTools();
    const handleDragStart = () => {
        const buttonProps = {
            text: 'Button',
            color: 'primary',
            variant: 'contained',
            style: {}
        };
        const button = item({
            type: 'Button',
            props: buttonProps
        })
        const data = branch(button);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragStart}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        className = {classAll}
        {...rest}
    >
        <VignetteIcon />
    </DnDBuilder>
}

export default ButtonTools;