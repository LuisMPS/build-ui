import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {fillStyles, flexStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const linkStyles = ({
    link: props => ({
        margin: props.margin,
        padding: props.padding,
        color: props.color,
        display: 'inline-block',
    }),
})

const useStyle = makeStyles(combineStyles(
    linkStyles,
    sizingStyles,
    positionStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;