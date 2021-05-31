import {useCallback, useRef} from 'react';

const useEvents = () => {
    const listeners = useRef(new Map());
    const addEventListener = useCallback((...args) => {
        const [node, type, listener] = args;
        const node_listeners = listeners.current.get(node) || {};
        const type_listeners = node_listeners[type] || [];
        const added_listeners = [...type_listeners, listener];
        const updated_listeners = Object.assign(
            {}, 
            node_listeners, 
            {[type]: added_listeners}
        );
        listeners.current.set(node, updated_listeners);
    }, []);
     const removeEventListener = useCallback((...args) => {
        const [node, type, listener] = args;
        const node_listeners = listeners.current.get(node) || {};
        const type_listeners = node_listeners[type] || [];
        const removed_listeners = type_listeners.filter(type => (
            type !== listener
        ));
        const updated_listeners = Object.assign(
            {}, 
            node_listeners, 
            {[type]: removed_listeners}
        );
        listeners.current.set(node, updated_listeners);
    }, []);
    const utils = {
        addEventListener,
        removeEventListener,
    }
    const eventsBag = {
        listeners: listeners
    }
    const bag = {
        ...eventsBag,
        ...utils,
    }
    return bag;
}

export default useEvents;