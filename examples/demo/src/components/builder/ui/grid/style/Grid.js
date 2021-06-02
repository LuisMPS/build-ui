import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';

const gridStyles = theme => {
    const generateBreakpointStyle = size => ({
        [theme.breakpoints.up(size)]: ({
            width: props => props[size] && props[size].width,
            height: props => props[size] && props[size].height,
        }),
    });
    return ({
        grid: ({
            ...generateBreakpointStyle('xs'),
            ...generateBreakpointStyle('sm'),
            ...generateBreakpointStyle('md'),
            ...generateBreakpointStyle('lg'),
            ...generateBreakpointStyle('xl'),
        }),
    })
};

const useStyle = makeStyles(combineStyles(
    gridStyles,
));

export default useStyle;