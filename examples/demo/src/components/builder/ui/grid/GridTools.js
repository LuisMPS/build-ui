import {branch, DnDBuilder, item, useTools} from 'build-ui'
import GridIcon from '@material-ui/icons/Apps';
import useStyle from './style/GridTools';
import clsx from 'clsx';

const GridTools = ({
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
        const gridProps = {
            container: false,
            item: false,
            xs: 12,
            style: {},
        }
        const grid = item({
            type: 'Grid',
            props: gridProps
        })
        const data = branch(grid);
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
        <GridIcon />
    </DnDBuilder>
}

export default GridTools;