import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {fillStyles, flexStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const imageStyles = ({
    image: ({
        
    }),
})

const useStyle = makeStyles(combineStyles(
    imageStyles,
    sizingStyles,
    positionStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;