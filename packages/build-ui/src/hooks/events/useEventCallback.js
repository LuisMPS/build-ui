import {useCallback, useRef} from 'react';

const useEventCallback = fn => {
    const callback = useRef(() => {
        throw new Error(`
            Cannot call an event 
            handler while rendering.
        `);
    });
    callback.current = fn;
    const eventCb = useCallback((...args) => {
        return callback.current(...args);
    }, []);
    return eventCb;
}

export default useEventCallback;