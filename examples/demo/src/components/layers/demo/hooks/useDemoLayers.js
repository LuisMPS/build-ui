import {useCollector, useDnDHelpers} from "build-ui";
import useLayers from "../../hooks/useLayers";
import useLayerHover from "./useLayerHover";

const HOVER_INSIDE = 'inside';

const useDemoLayers = ({
    delegatePixels = 10,
    ...params
}) => {
    const id = params.id;
    const selector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: selector,
    });
    const layers = useLayers({
        ...params,
    });
    const helpers = useDnDHelpers();
    const hover = useLayerHover({
        id: id
    });
    function handleDelegatedDrop(event) {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const {getDnDEventClientCoords} = helpers;
        const [, y] = getDnDEventClientCoords(event);
        const inside = (
            rect.top + delegatePixels < y &&
            rect.top + rect.height - delegatePixels > y
        );
        if (!inside) {
            return;
        }
        layers.handleDrop(event);
    }
    function handleDelegatedDragOver(event) {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const {getDnDEventClientCoords} = helpers;
        const [, y] = getDnDEventClientCoords(event);
        const inside = (
            rect.top + delegatePixels < y &&
            rect.top + rect.height - delegatePixels > y
        );
        if (!inside) {
            return;
        }
        hover.handleHover(event, HOVER_INSIDE);
    }
    function handleDragEnter(event) {
        hover.handleHoverEnter(event);
    }
    function handleDragLeave(event) {
        hover.handleHoverLeave(event);
    }
    const demoBag = {
        hover: hover.hover,
    }
    const constants = {
        HOVER_INSIDE: HOVER_INSIDE,
    }
    const collectBag = {
        node: collected.node,
        meta: collected.meta,
        indexes: collected.indexes,
    }
    const handlers = {
        handleDelegatedDrop: layers.toDnDHandler(handleDelegatedDrop),
        handleDelegatedDragOver: layers.toDnDHandler(handleDelegatedDragOver),
        handleDragEnter: layers.toDnDHandler(handleDragEnter),
        handleDragLeave: layers.toDnDHandler(handleDragLeave),
    };
    const bag = {
        ...demoBag,
        ...collectBag,
        ...constants,
        ...handlers,
        ...layers
    };
    return bag;
}

export default useDemoLayers;