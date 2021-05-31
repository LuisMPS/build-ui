import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../styles/combine';

const menuStyles = ({
    menu: ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: 'center'
    }),
    action: ({
        flex: '1 1 0',
        height: '100%',
    }),
    file: ({
        // Escape hatch
        // to allow file 
        // input styling.
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
    }),
    invisible: ({
        // For link and 
        // file input
        display: 'none'
    }),
    button: ({
        borderRadius: 0,
        // boxShadow: 'none',
        // borderRight: '1px solid rgba(255, 255, 255, 0.5);',
        // backgroundColor: '#677b87',
    })
})

const useStyle = makeStyles(combineStyles(
    menuStyles,
));

export default useStyle;