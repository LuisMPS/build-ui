import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {viewStyles} from "../../../styles/views";

const linkStyles = ({
    view: ({
        
    })
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    linkStyles,
));

export default useStyle;