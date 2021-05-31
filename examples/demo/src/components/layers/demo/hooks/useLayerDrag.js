import {useDnDHelpers} from "build-ui";
import useLayerHover from "./useLayerHover";

const HOVER_TOP = 'top';
const HOVER_BOTTOM = 'bottom';

const useLayerDrag = ({
    id,
}) => {
    const hover = useLayerHover({
        id: id
    });
    const helpers = useDnDHelpers();
    function handleDragOver(event) {
        const {getDnDEventPosition} = helpers;
        const position = getDnDEventPosition(event);
        const top = position.top;
        const layer_hover = top ? HOVER_TOP : HOVER_BOTTOM;
        hover.handleHover(event, layer_hover);
    }
    function handleDragEnter(event) {
        hover.handleHoverEnter(event);
    }
    function handleDragLeave(event) {
        hover.handleHoverLeave(event);
    }
    const dragBag = {
        hover: hover.hover,
    };
    const handlers = {
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
    }
    const constants = {
        HOVER_TOP: HOVER_TOP,
        HOVER_BOTTOM: HOVER_BOTTOM,
    };
    const bag = {
        ...dragBag,
        ...handlers,
        ...constants,
    }
    return bag;
}

export default useLayerDrag;
