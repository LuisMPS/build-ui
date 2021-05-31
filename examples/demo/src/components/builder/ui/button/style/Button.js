import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {fillStyles, flexStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const buttonStyles = ({
    button: props => ({
        padding: props.padding,
        margin: props.margin,
    }),
})

const useStyle = makeStyles(combineStyles(
    buttonStyles,
    sizingStyles,
    positionStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;