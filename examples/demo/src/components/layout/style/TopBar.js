import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles/combine';

export const topbarStyles = ({
    tools: ({
        display: 'flex',
        height: '100%'
    }),
    menu: ({
        display: 'flex',
        height: '100%'
    }),
})

const useStyle = makeStyles(combineStyles(
    topbarStyles,
));

export default useStyle;