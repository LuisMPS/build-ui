import {isNumber} from '../../utils/number';

const useEventHelpers = () => {
    function getEventClientCoords(event) {
        const x = (
            isNumber(event.clientX) 
            ? event.clientX
            : event.changedTouches
            ? event.changedTouches[0].clientX
            : event.touches
            && event.touches[0].clientX
        );
        const y = (
            isNumber(event.clientY) 
            ? event.clientY
            : event.changedTouches
            ? event.changedTouches[0].clientY
            : event.touches
            && event.touches[0].clientY
        );
        return [x, y];
    }
    function getEventPosition(event) { 
        const coords = getEventClientCoords(event);
        const [eventX, eventY] = coords;
        const target = event.currentTarget;
        const {
            top, height,
            left, width,
        } = target.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        return {
            top: centerY > eventY,
            bottom: centerY <= eventY,
            left: centerX > eventX,
            right: centerX <= eventX,
        }
    }
    const helpersBag = {
        getEventClientCoords,
        getEventPosition
    }
    const bag = {
        ...helpersBag
    }
    return bag;
}

export default useEventHelpers;

