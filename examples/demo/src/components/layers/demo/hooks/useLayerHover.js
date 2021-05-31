import {useEffect} from 'react';
import {useActions, useCollector, useDnDHelpers} from 'build-ui'; 
import useLayers from '../../hooks/useLayers';

const useLayerHover = params => {
    const id = params.id;
    const selector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: selector,
    });
    const hover = (
        collected.meta.layer_hover
    );
    const layers = useLayers({
        id: id
    });
    const actions = useActions();
    function handleHover(event, hover) {
        event.stopPropagation();
        const meta = {layer_hover: hover};
        actions.unrecorded.triggerMetaUpdate({
            id: id,
            meta: meta,
        });
    }
    function handleHoverEnter(event) {
        // Can only enter top most
        // layer. Empty function
        // on purpose.
        return;
    }
    function handleHoverLeave(event) {
        const meta = {layer_hover: null};
        actions.unrecorded.triggerMetaUpdate({
            id: id,
            meta: meta,
        });
    }
    const isTransfering = (
        layers.isTransfering
    );
    const triggerMetaUpdate = (
        actions.unrecorded.triggerMetaUpdate
    );
    useEffect(() => {
        if (!hover || isTransfering) return;
        const meta = {layer_hover: null};
        triggerMetaUpdate({
            id: id,
            meta: meta,
        });
    }, [
        id,
        hover,
        isTransfering,
        triggerMetaUpdate
    ]);
    const hoverBag = {
        hover: hover,
    }
    const handlers = {
        handleHover,
        handleHoverEnter,
        handleHoverLeave,
    }
    const bag = {
        ...hoverBag,
        ...handlers,
    }
    return bag;
}

export default useLayerHover;