import {useActions, useDnDHelpers} from "build-ui";
import {getContentClientRect} from "../utils/dom";
import {convertToPx} from "../utils/units";

const usePositioner = () => {
    const actions = useActions();
    const helpers = useDnDHelpers();
    function getDnDPosition(event) {
        const target = event.currentTarget;
        const {
            top,
            left    
        } = target.getBoundingClientRect();
        // Necessary for elements with 
        // scrollable overflow. Will be
        // passive on non-scrollable
        // elements since values will be 0.
        const scrollTop = target.scrollTop;
        const scrollLeft = target.scrollLeft;
        const {getDnDEventClientCoords} = helpers;
        const [clientX, clientY] = getDnDEventClientCoords(event);
        const position = {
            top: clientY + scrollTop - top,
            left: clientX  + scrollLeft - left,
        };
        // console.log(clientY, top, scrollTop)
        // console.log(clientY, top, position.top)
        return position;
    }
    function onDropDonePositioned(bag) {
        const draggedId = bag.transfer.id;
        const dropPosition = getDnDPosition(bag.event);
        // Supply a fallback drag 
        // position, to drop at
        // top left corner for 
        // unpositioned drags,
        // such as when dragging 
        // initially from tools.
        const defaultDragPosition = {
            left: 0, 
            top: 0
        };
        const suppliedDragPosition = bag.meta.position;
        const dragPosition = (
            suppliedDragPosition || 
            defaultDragPosition
        );
        // Supply a fallback 
        // units object, to handle
        // operation in pixels 
        // when not supplied
        // such as when dragging
        // from tools.
        const defaultUnits = {
            unitsLeft: 'px',
            unitsTop: 'px',
        };
        const suppliedUnits = bag.meta.units;
        const units = (
            suppliedUnits || 
            defaultUnits
        );
        const {unitsLeft, unitsTop} = units;
        const conversionLeft = convertToPx('1' + unitsLeft, {
            target: bag.event.currentTarget,
            targetAsContainer: true,
            rectProperty: 'left',
            withProperties: {position: 'absolute'}
        });
        const positionLeft = (
            (dropPosition.left - dragPosition.left) / 
            conversionLeft
        );
        const conversionTop = convertToPx('1' + unitsTop, {
            target: bag.event.currentTarget,
            targetAsContainer: true,
            rectProperty: 'top',
            withProperties: {position: 'absolute'}
        });
        // console.log('units', unitsTop, unitsLeft);
        // console.log('conversions', conversionTop, conversionLeft);
        // console.log('drag', dragPosition.top, dragPosition.left);
        // console.log('drop', dropPosition.top, dropPosition.left);
        const positionTop = (
            (dropPosition.top - dragPosition.top) / 
            conversionTop 
        );

        const positionStyle = {
            position: 'absolute',
            left: positionLeft + unitsLeft,
            top: positionTop + unitsTop,
        }
        const props = {
            style: positionStyle,
        }
        actions.timeBatched.triggerUpdate({
            id: draggedId,
            props: props,
        });
    }
    const listeners = {
        onDropDonePositioned
    };
    const utils = {
        getDnDPosition,
    };
    const bag = {
        ...listeners,
        ...utils,
    }
    return bag;
}

export default usePositioner;