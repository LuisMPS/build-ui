import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../styles';
import {panelStyles} from '../../styles/panels';

const useStyle = makeStyles(combineStyles(
    panelStyles,
));

export default useStyle;