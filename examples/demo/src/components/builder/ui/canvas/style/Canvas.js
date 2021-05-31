import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';

const canvasStyles = ({
    canvas: props => ({
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: props.backgroundColor,
    }),
})

const useStyle = makeStyles(combineStyles(
    canvasStyles,
));

export default useStyle;