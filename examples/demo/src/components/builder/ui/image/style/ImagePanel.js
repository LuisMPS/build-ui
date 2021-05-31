import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {panelStyles} from '../../../styles/panels';

const imageStyles = theme => ({
    field: ({
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '1rem',
    }),
    input: ({
        flex: '1 0 40%'
    }),
    textInput: ({
        width: '90%'
    }),
    sourceChange: ({
        flex: '1 0 30%',
        textAlign: 'center'
    }),
    sourceButton: ({
        margin: '0 auto',
        width: '80%'
    })
})

const useStyle = makeStyles(combineStyles(
    panelStyles,
    imageStyles,
));

export default useStyle;