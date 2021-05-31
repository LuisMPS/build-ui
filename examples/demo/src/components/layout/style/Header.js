import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles/combine';

export const headerStyles = theme => ({
    header: ({
        height: '70px',
        color: 'white',
        backgroundColor: '#1a2a33',
        [theme.breakpoints.up('xs')]: ({
            paddingLeft: '3%',
            paddingRight: '3%',
        }),
        [theme.breakpoints.down('xs')]: ({
            paddingLeft: '5%',
            paddingRight: '5%',
        }),
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid gray'
    }),
    title: ({
        fontSize: 31,
        fontFamily: 'Roboto',
        // fontWeight: 400,
        margin: '0px'
    })
})

const useStyle = makeStyles(combineStyles(
    headerStyles,
));

export default useStyle;