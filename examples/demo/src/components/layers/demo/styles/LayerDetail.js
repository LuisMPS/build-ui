import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../builder/styles"

const layerStyles = ({
    type: props => ({
        marginLeft: 10 + props.depth * 20,
        marginTop: 0,
        marginBottom: 0,
    }),
    layer: props => ({
        backgroundColor: '#f2f2f3',
        borderTop: props.depth === 0 && '1px solid #bcd3eb',
        borderBottom: '1px solid #bcd3eb',
        padding: 10,
    }),
    lockIcon: ({
        verticalAlign: 'middle',
        height: '0.9em',
        '&:hover': {
            cursor: 'pointer',
        }
    }),
    deleteIcon: ({
        verticalAlign: 'middle',
        height: '0.9em',
        float: 'right',
        '&:hover': {
            cursor: 'pointer',
        }
    })
});

const useStyle = makeStyles(combineStyles(
    layerStyles,
));

export default useStyle;
