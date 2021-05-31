import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {viewStyles} from '../../../styles/views';

const gridStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    gridStyles,
));

export default useStyle;