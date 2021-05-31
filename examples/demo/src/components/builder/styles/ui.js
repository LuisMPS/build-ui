export const positionStyles = ({
    ui: props => ({
        position: props.positioned && 'absolute',
        top: props.positioned && props.top,
        left: props.positioned && props.left,
    })
});

export const sizingStyles = ({
    ui: props => ({
        width: props.width,
        height: props.height,
    })
});

export const flexStyles = ({
    ui: props => ({
        flex: (
            props.flexGrow || 1 + ' ' +
            props.flexShrink || 1 + ' ' + 
            props.flexBasis || '0px'
        ),
    })
});

export const fillStyles = ({
    fill: ({
        width: '100%',
        height: '100%',
    }),
})

