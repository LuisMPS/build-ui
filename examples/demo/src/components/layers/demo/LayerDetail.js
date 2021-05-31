import {useCollector} from "build-ui";
import useDemoEditor from "../../../hooks/useDemoEditor";
import useStyle from './styles/LayerDetail';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from "clsx";

const LayerDetail = ({
    id,
    children,
    depth,
    className,
    ...rest
}) => {
    const selector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: selector,
    })
    const editor = useDemoEditor({
        id: id,
    });
    const classes = useStyle({
        depth: depth,

    });
    const classAll = clsx(
        className,
        classes.layer,
    )
    return <div 
        {...rest}
        onClick = {editor.handleSelect}
        className = {classAll}
    >
        {depth > 0 && <span 
            onClick = {editor.handleToggleFix}
        >
            {editor.meta.fixed 
            ? <LockOutlinedIcon 
                className = {classes.lockIcon} 
            />
            : <LockOpenOutlinedIcon
                className = {classes.lockIcon} 
            />}
        </span>}
        <span className = {classes.type}>
            - {collected.node.type}
        </span>
        {depth > 0 && <span 
            onClick = {editor.handleDelete}
        >
            <DeleteIcon 
                className = {classes.deleteIcon}
            />
        </span>}
        {children}
    </div>
}

export default LayerDetail;