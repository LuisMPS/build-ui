import {isFunction} from "../utils/function";
import {deepMerge} from "../utils/object";

function combineStyles(...styles) {
    return function CombineStyles(theme) {
        const outStyles = styles.map((arg) => {
            // Apply the "theme" object for style functions.
            if (isFunction(arg)) {
                return arg(theme);
            }
            // Objects need no change.
            return arg;
        });
        return outStyles.reduce((acc, val) => deepMerge(acc, val), {});
    }
}
  
export default combineStyles;

// Example:

/*

const s1 = ({
    tools: props => ({
        zIndex: props.zIndex
    }),
    tip: ({
        color: 'red'
    }),
    view: props => ({
        position: props.position,
    })
});

const s2 = theme => ({
    tools: ({
        touchAction: 'none'
    }),
    container: ({
        color: theme.palette.primary,
        padding: theme.spacing.padding,
    })
});

const s3 = ({
    view: props => ({
        margin: props.margin
    }),
    container: props => ({
        padding: props.padding,
    })
});

// First step: Apply THEME
// (Convert all to objects)

const s1 = ({
    tools: props => ({
        zIndex: props.zIndex
    }),
    tip: ({
        color: 'red'
    }),
    view: props => ({
        position: props.position,
    })
});

const s2 = ({
    tools: ({
        touchAction: 'none'
    }),
    container: ({
        color: 'blue', // Theme primary is blue
        padding: '20px', // Theme padding is 20px
    })
});

const s3 = ({
    view: props => ({
        margin: props.margin
    }),
    container: props => ({
        padding: props.padding,
    })
});

// Second step: Apply PROPS
// Deep merge takes care of
// deep merging functions.

// Expected combine(s1, s2, s3)

const sr = theme => ({
    tools: props => ({
        zIndex: props.zIndex,
        touchAction: 'none',
    }),
    view: props => ({
        margin: props.margin,
        position: props.position,
    }),
    container: props => ({
        color: theme.palette.primary,
        padding: props.padding,
    }),
    tip: ({
        color: 'red'
    })
})

*/


