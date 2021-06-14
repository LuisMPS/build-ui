import {useActions, useCollector, useDnDHelpers, useEditor} from "build-ui"
import {useEffect, useRef, useState} from "react";
import {convertToPx, extractNumber, extractUnits} from "../utils/units";

const useDemoEditor = params => {
    const id = params.id;
    const actions = useActions();
    const editor = useEditor(params);
    const nodeSelector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: nodeSelector
    });
    const builder = useRef();
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
    function handlePositionedDragStart(event) {
        const {top, left} = editor.props.style;
        const unitsTop = extractUnits(top) || 'px';
        const unitsLeft = extractUnits(left) || 'px';
        const units = {
            unitsLeft: unitsLeft,
            unitsTop: unitsTop,
        }
        const position = getDnDPosition(event);
        const meta = {
            position: position,
            units: units,
        };
        editor.triggerDragStart({
            meta: meta,
        });
    }
    const positionOnResizeStart = useRef();
    const sizeOnResizeStart = useRef();
    const handleResizeStart = event => {
        // To prevent drag start 
        // with mouse from being 
        // fired in any place.
        // (Mouse down and drag 
        // start are different 
        // events).
        event.preventDefault();
        // To prevent drag start 
        // with touch from being 
        // fired in any place.
        // (Both started with touch
        // up event).
        event.stopPropagation();
        const element = builder.current;
        positionOnResizeStart.current = ({
            // Props from DOM. Will be given
            // always in pixels.
            top: element.offsetTop,
            left: element.offsetLeft,
            // Props from store. May be given
            // if any unit: percentages, px, 
            // etc...
            topProp: editor.props.style.top,
            leftProp: editor.props.style.left,
        });
        sizeOnResizeStart.current = ({
            // Props from DOM. Will be given
            // always in pixels.
            width: element.offsetWidth,
            height: element.offsetHeight,
            // Props from store. May be given
            // if any unit: percentages, px, 
            // etc...
            widthProp: editor.props.style.width,
            heightProp: editor.props.style.height,
        });
    }
    const helpers = useDnDHelpers();
    function handlePositionedDrop(event, position) {
        editor.handleDrop(event, position);
        const bag = helpers.getDragAndDrop()
        const draggedId = bag.transfer.id;
        const dropPosition = getDnDPosition(event);
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
            target: event.currentTarget,
            targetAsContainer: true,
            rectProperty: 'left',
            withProperties: {position: 'absolute'}
        });
        const positionLeft = (
            (dropPosition.left - dragPosition.left) / 
            conversionLeft
        );
        const conversionTop = convertToPx('1' + unitsTop, {
            target: event.currentTarget,
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
    const handleResize = (_event, bag) => {
        
        const {expand, directions} = bag;
        const {width, height, widthProp, heightProp} = (
            sizeOnResizeStart.current
        );
        const {top, left, topProp, leftProp} = (
            positionOnResizeStart.current
        );
        const widthResizePx = (width + expand.x);
        const heightResizePx = (height + expand.y);
        
        const valueWidth = extractNumber(widthProp) || width;
        const unitsWidth = extractUnits(widthProp) || 'px';
        const normalizedWidth = convertToPx('1' + unitsWidth, {
            target: builder.current,
            targetAsContainer: false,
            rectProperty: 'width',
            withProperties: {position: 'absolute'}
        });
        // console.log(width, valueWidth * normalizedWidth, normalizedWidth);
        const expansionWidth = expand.x / normalizedWidth;
        const widthResize = Number.parseFloat(valueWidth + expansionWidth);
        const propsWidth = {
            style: {width: widthResizePx >= 40 
            ? widthResize + unitsWidth
            : (40 / normalizedWidth) + unitsWidth},
        }; 
        actions.timeBatched.triggerUpdate({
            id: id,
            props: propsWidth
        });
        
        // Move element to right in case 
        // x direction is negative
        if (directions.x < 0) {
            // directions.x is equal to -1
            const valueLeft = extractNumber(leftProp) || left;
            const unitsLeft = extractUnits(leftProp) || 'px';
            const normalizedLeft = convertToPx('1' + unitsLeft, {
                target: builder.current,
                targetAsContainer: false,
                rectProperty: 'left',
                withProperties: {position: 'absolute'}
            });
            const expansionLeft = expand.x / normalizedLeft;
            const shiftLeft = Number.parseFloat(valueLeft + expansionLeft * -1);
            // console.log(left, normalizedLeft * valueLeft);
            // console.log(valueLeft, left);
            const propsLeft = {
                style: {left: widthResizePx >= 40 
                ? shiftLeft + unitsLeft
                : ((left + width - 40) / normalizedLeft) + unitsLeft},
            };
            actions.timeBatched.triggerUpdate({
                id: id,
                props: propsLeft
            });
        }
        
        const valueHeight = extractNumber(heightProp) || height;
        const unitsHeight = extractUnits(heightProp) || 'px';
        const normalizedHeight = convertToPx('1' + unitsHeight, {
            target: builder.current,
            targetAsContainer: false,
            rectProperty: 'height',
            withProperties: {position: 'absolute'}
        });
        const expansionHeight = expand.y / normalizedHeight;
        const heightResize = Number.parseFloat(valueHeight + expansionHeight);
        const propsHeight = {
            style: {height: heightResizePx >= 40 
            ? heightResize + unitsHeight
            : (40 / normalizedHeight) + unitsHeight},
        }; 
        actions.timeBatched.triggerUpdate({
            id: id,
            props: propsHeight
        });

        // Move element to bottom in case 
        // y direction is negative
        if (directions.y < 0) {
            // directions.y is equal to -1
            const valueTop = extractNumber(topProp) || top;
            const unitsTop = extractUnits(topProp) || 'px';
            const normalizedTop = convertToPx('1' + unitsTop, {
                target: builder.current,
                targetAsContainer: false,
                rectProperty: 'top',
                withProperties: {position: 'absolute'}
            });
            const expansionTop = expand.y / normalizedTop;
            const shiftTop = Number.parseFloat(valueTop + expansionTop * -1);
            const propsTop = {
                style: {top: heightResizePx >= 40 
                ? shiftTop + unitsTop
                : ((top + height - 40) / normalizedTop) + unitsTop},
            };
            actions.timeBatched.triggerUpdate({
                id: id,
                props: propsTop
            });
        }
    }
    const handleResizeEnd = () => {
        positionOnResizeStart.current = null;
        sizeOnResizeStart.current = null;
    }
    function handleSelect(event) {
        const noShift = !event.shiftKey;
        if (noShift) {
            // No shift means no
            // multi-select
            actions.unrecorded.triggerListIndexClear({
                name: 'selected'
            });
        }
        actions.unrecorded.triggerIndexAdd({
            id: id,
            name: 'panel'
        });
        actions.unrecorded.triggerListIndexToggle({
            id: id,
            name: 'selected'
        });
        event.stopPropagation();
    }
    function handleDeselect() {
        actions.unrecorded.triggerListIndexRemove({
            id: id,
            name: 'selected'
        });
    }
    const [hovering, setHovering] = useState(false);
    const [paint, setPaint] = useState();
    function handlePaintDropZone(event) {
        const props = {
            style: {backgroundColor: '#b5c2c4'}
        };
        actions.unrecorded.triggerUpdate({
            id: id,
            props: props,
        });
        event.stopPropagation();
        setPaint(editor.props.style.backgroundColor);
        setHovering(true);
    }
    function handleEraseDropZone() {
        const props = {
            style: {backgroundColor: paint}
        };
        actions.unrecorded.triggerUpdate({
            id: id,
            props: props,
        });
        setPaint(null);
        setHovering(false);
    }
    const isTransfering = editor.isTransfering;
    useEffect(() => {
        if (isTransfering || !hovering) return;
        handleEraseDropZone();
    });
    function handleDelete(event) {
        actions.timeBatched.triggerDelete({
            id: id
        });
        event.stopPropagation();
    }
    function handleToggleFix(event) {
        const fixed = Boolean(collected.meta.fixed);
        const props = {
            fixed: !fixed
        };
        actions.unrecorded.triggerMetaUpdate({
            id: id,
            meta: props,
        });
        event.stopPropagation();
    }
    const dndHandlers = {
        handlePositionedDragStart: handlePositionedDragStart,
        handlePositionedDrop: editor.toDnDHandler(handlePositionedDrop),
        handlePaintDropZone: editor.toDnDHandler(handlePaintDropZone),
        handleEraseDropZone: editor.toDnDHandler(handleEraseDropZone)
    }
    const handlers = {
        handleResize,
        handleResizeStart,
        handleResizeEnd,
        handleSelect,
        handleDeselect,
        handleToggleFix,
        handleDelete,
    }
    const demoBag = {
        builder: builder,
        hovering: hovering,
    }
    const collectBag = {
        node: collected.node,
        meta: collected.meta,
        indexes: collected.indexes,
    }
    const bag = {
        ...editor,
        ...dndHandlers,
        ...handlers,
        ...demoBag,
        ...collectBag,
    }
    return bag;
}

export default useDemoEditor;
