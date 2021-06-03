import {makeStyles} from "@material-ui/core/styles";
import combineStyles from '../../../styles';
import {toolStyles} from '../../../styles/tools';

const useStyle = makeStyles(combineStyles(
    toolStyles,
));

export default useStyle;