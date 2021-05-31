import {branch, DnDBuilder, item, useTools} from 'build-ui'
import ImageIcon from '@material-ui/icons/Image';
import useStyle from './style/ImageTools';
import clsx from 'clsx';

const ImageTools = ({
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
        const imageStyle = {
            width: 200,
            height: 172,
        }
        const imageProps = {
            src: 'https://i.pinimg.com/originals/38/d9/c6/38d9c68ea61be4ddea8e6a87199d6c8d.png',
            style: imageStyle,
        }
        const image = item({
            type: 'Image',
            props: imageProps
        });
        const data = branch(image);
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
        <ImageIcon />
    </DnDBuilder>
}

export default ImageTools;