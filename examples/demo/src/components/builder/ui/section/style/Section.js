import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {flexStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const sectionStyles = ({
    section: props => ({
        display: props.display,
        flexDirection: props.display === 'flex' && props.flexDirection,
        flexWrap: props.display === 'flex' && props.flexWrap,
        alignItems: props.display === 'flex' && props.alignItems,
        justifyContent: props.display === 'flex' && props.justifyContent,
        backgroundColor: props.backgroundColor,
        backgroundImage: props.backgroundUrl && `url(${props.backgroundUrl})`,
        backgroundPosition: props.backgroundPosition,
        backgroundSize: props.backgroundSize,
        backgroundRepeat: 'no-repeat',
    }),
});

const useStyle = makeStyles(combineStyles(
    sectionStyles,
    sizingStyles,
    positionStyles,
    flexStyles,
));

export default useStyle;