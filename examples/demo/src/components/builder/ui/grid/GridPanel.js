import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import useDemoEditor from '../../../../hooks/useDemoEditor'
import useStyle from './style/GridPanel';

const GridPanel = ({
    id,
}) => {
    const [breakpoint, setBreakpoint] = useState('xs');
    const handleBreakpoint = event => (
        setBreakpoint(event.target.value)
    );
    const editor = useDemoEditor({
        id: id
    });
    const classes = useStyle();
    return <div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'container'
            className = {classes.label}
        >
            Container?
        </label>
        <span className = {classes.input}>
            <Checkbox
                name = 'container'
                id = 'container'
                checked = {editor.props.container}
                onChange = {editor.handleUpdate}
            />
        </span>
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'item'
            className = {classes.label}
        >
            Item?
        </label>
        <span className = {classes.input}>
            <Checkbox
                name = 'item'
                id = 'item'
                checked = {editor.props.item}
                onChange = {editor.handleUpdate}
            />
        </span>
        </div>

        {editor.props.item && <React.Fragment>

            <div className = {classes.field}>
            <label 
                htmlFor = 'xs'
                className = {classes.label}
            >
                Extra Small Size
            </label>
            <TextField
                variant = 'outlined'
                type = 'number'
                min = {0}
                max = {12}
                name = 'xs'
                id = 'xs'
                value = {editor.props.xs || ''}
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>

            <div className = {classes.field}>
            <label 
                htmlFor = 'sm'
                className = {classes.label}
            >
                Small Size
            </label>
            <TextField
                variant = 'outlined'
                type = 'number'
                min = {0}
                max = {12}
                name = 'sm'
                id = 'sm'
                value = {editor.props.sm || ''}
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>

            <div className = {classes.field}>
            <label 
                htmlFor = 'md'
                className = {classes.label}
            >
                Medium Size
            </label>
            <TextField
                variant = 'outlined'
                type = 'number'
                min = {0}
                max = {12}
                name = 'md'
                id = 'md'
                value = {editor.props.md || ''}
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>

            <div className = {classes.field}>
            <label 
                htmlFor = 'lg'
                className = {classes.label}
            >
                Large Size
            </label>
            <TextField
                variant = 'outlined'
                type = 'number'
                min = {0}
                max = {12}
                name = 'lg'
                id = 'lg'
                value = {editor.props.lg || ''}
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>

            <div className = {classes.field}>
            <label 
                htmlFor = 'xl'
                className = {classes.label}
            >
                Extra Large Size
            </label>
            <TextField
                variant = 'outlined'
                type = 'number'
                min = {0}
                max = {12}
                name = 'xl'
                id = 'xl'
                value = {editor.props.xl || ''}
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>

        </React.Fragment>}

        <div className = {classes.field}>
        <label 
            htmlFor = 'breakpoint'
            className = {classes.label}
        >
            Breakpoint Styling
        </label>
        <Select
            native = {true}
            variant = 'outlined'
            name = 'breakpoint'
            value = {breakpoint}
            onChange = {handleBreakpoint}
            className = {classes.input}
        >
            <option value = '' />
            <option value = 'xs'>
                Extra Small
            </option>
            <option value = 'sm'>
                Small
            </option>
            <option value = 'md'>
                Medium
            </option>
            <option value = 'lg'>
                Large
            </option>
            <option value = 'xl'>
                Extra Large
            </option>
        </Select>
        </div>

        {Boolean(breakpoint) && <React.Fragment>

            <div className = {classes.field}>
            <label 
                htmlFor = {`style.${breakpoint}.width`}
                className = {classes.label}
            >
                Width
            </label>
            <TextField
                variant = 'outlined'
                name = {`style.${breakpoint}.width`}
                id = {`style.${breakpoint}.width`}
                value = {
                    editor.props.style[breakpoint] &&
                    editor.props.style[breakpoint].width ||
                    ''
                }
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>

            <div className = {classes.field}>
            <label 
                htmlFor = {`style.${breakpoint}.height`}
                className = {classes.label}
            >
                Height
            </label>
            <TextField
                variant = 'outlined'
                name = {`style.${breakpoint}.height`}
                id = {`style.${breakpoint}.height`}
                value = {
                    editor.props.style[breakpoint] &&
                    editor.props.style[breakpoint].height ||
                    ''
                }
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>
            
        </React.Fragment>}
        

    </div>
}

export default GridPanel;