import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {fillStyles, flexStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const alertStyles = ({
    alert: props => ({
        padding: props.padding,
        margin: props.margin,
    }),
})

const useStyle = makeStyles(combineStyles(
    alertStyles,
    fillStyles,
    sizingStyles,
    positionStyles,
    flexStyles,
));

export default useStyle;