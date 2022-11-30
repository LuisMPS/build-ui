import useEventHelpers from "../events/useEventHelpers";

const useDnDHelpers = () => {
    const events = useEventHelpers();
    function getDnDEventClientCoords(event) {
        return events.getEventClientCoords(event);
    }
    function getDnDEventPosition(event) { 
        return events.getEventPosition(event);
    }
    const utils = {
        getDnDEventPosition,
        getDnDEventClientCoords,
    }
    const bag = {
        ...utils,
    }
    return bag;
}

export default useDnDHelpers;