import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../../../styles/combine';
import {viewStyles} from '../../../styles/views';

const canvasStyles = ({
    view: ({
        overflow: 'auto',
    }),
});

const useStyle = makeStyles(combineStyles(
    viewStyles,
    canvasStyles,
));

export default useStyle;