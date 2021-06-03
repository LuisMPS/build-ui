import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {viewStyles} from "../../../styles/views";

const textStyles = ({
    view: ({

    }),
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    textStyles,
));

export default useStyle;
