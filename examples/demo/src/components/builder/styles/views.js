export const viewStyles = ({
    view: props => ({
        touchAction: !props.fixed && 'none',
        border: props.selected
        ? '1px dashed #1a73e8'
        : '1px solid transparent',
    }),
});

