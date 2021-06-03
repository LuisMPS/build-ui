import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../builder/styles"

const childStyles = ({
    child: props => ({
        borderTop: props.borderTop && '3px solid #72adcc',
        borderBottom: props.borderBottom && '3px solid #72adcc'
    }),
});

const useStyle = makeStyles(combineStyles(
    childStyles,
));

export default useStyle;
