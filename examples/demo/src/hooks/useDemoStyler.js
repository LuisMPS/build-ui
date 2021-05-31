import {useCollector} from "build-ui";

const useDemoStyler = ({
    id,
}) => {
    const nodeSelector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: nodeSelector
    });
    const parentSelector = selectors => (
        selectors.selectParent(id)
    );
    const parent = useCollector({
        selector: parentSelector
    });
    function styles() {
        const flexItem = (
            parent.node && 
            parent.node.props.style.display === 'flex'
        );
        const positioned = !parent.node || (
            parent.node.type !== 'Grid' &&
            !flexItem
        );
        const positionedStyle = {positioned: positioned}
        const flexStyle = {flexItem: flexItem};
        return {
            ...positionedStyle,
            ...flexStyle,
        }
    }
    function completeStyle(style) {
        const completedStyle = {
            ...style,
            ...styles(),
        }
        return completedStyle;
    }
    const stylerBag = {
        styles: styles(),
    }
    const utils = {
        completeStyle: completeStyle
    }
    const bag = {
        ...stylerBag,
        ...utils
    }
    return bag;
}

export default useDemoStyler;