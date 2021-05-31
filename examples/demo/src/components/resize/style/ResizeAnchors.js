import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    anchor_1: ({
        position: 'absolute',
        top: '0%',
        left: '0%',
        transform: 'translateX(-50%) translateY(-50%)',
    }),
    anchor_2: ({
        position: 'absolute',
        top: '0%',
        left: '50%',
        transform: 'translateX(-50%)  translateY(-50%)',
    }),
    anchor_3: ({
        position: 'absolute',
        top: '0%',
        left: '100%',
        transform: 'translateX(-50%)  translateY(-50%)',
    }),
    anchor_4: ({
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
    }),
    anchor_5: ({
        position: 'absolute',
        left: '100%',
        top: '100%',
        transform: 'translateX(-50%) translateY(-50%)'
    }),
    anchor_6: ({
        position: 'absolute',
        left: '50%',
        top: '100%',
        transform: 'translateX(-50%) translateY(-50%)',
    }),
    anchor_7: ({
        position: 'absolute',
        left: '0%',
        top: '100%',
        transform: 'translateX(-50%) translateY(-50%)',
    }),
    anchor_8: ({
        position: 'absolute',
        left: '0%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
    }),
})

export default useStyle;