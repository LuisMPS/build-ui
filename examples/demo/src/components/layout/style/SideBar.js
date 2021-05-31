import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles/combine';

export const sidebarStyles = theme => ({
    sidebar: ({
        height: '100%',
        fontFamily: 'Roboto',
    }),
    panel: ({
        backgroundColor: '#f2f2f3',
        margin: 'auto auto',
        [theme.breakpoints.down('md')]: ({
            minHeight: '180px',
        }),
        [theme.breakpoints.up('md')]: ({
            // minHeight: '50%',
            height: '50%',
            overflow: 'auto'
        }),
    }),
    layers: ({
        [theme.breakpoints.up('md')]: ({
            // minHeight: '50%',
            height: '50%',
            overflow: 'auto'
        }),
    }),
    head: ({
        backgroundColor: '#1a2a33',
        padding: '0.75rem 1.2rem'
    }),
    title: ({
        color: 'white',
        fontSize: 20,
        margin: 0,
        padding: 0,
    }),
    content: ({
        width: '80%',
        margin: '0rem auto',
        paddingTop: '0.5rem',
        paddingBottom: '0.8rem',
    })

})

const useStyle = makeStyles(combineStyles(
    sidebarStyles,
));

export default useStyle;