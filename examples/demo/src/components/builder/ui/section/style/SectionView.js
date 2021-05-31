import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {viewStyles} from '../../../styles/views';

const sectionStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    sectionStyles,
));

export default useStyle;