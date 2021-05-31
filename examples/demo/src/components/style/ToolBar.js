import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../styles/combine';

const sidebarStyles = ({
    tools: ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }),
    tool_item: ({
        flex: '1 1 0',
    }),
})

const useStyle = makeStyles(combineStyles(
    sidebarStyles,
));

export default useStyle;