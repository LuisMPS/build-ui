import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {fillStyles, flexStyles, positionStyles, sizingStyles} from "../../../styles/ui";
import {textStyles} from './Text';

const textInputStyles = ({
    textInput: props => ({
        ...textStyles.text(props),
        resize: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        '&:focus': {
            outline: 'none'
        }
    }),
})

const useStyle = makeStyles(combineStyles(
    textInputStyles,
    positionStyles,
    sizingStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;