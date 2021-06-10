import React from 'react';
import {useMemo} from 'react';
import {useBatcher} from '../hooks/useTimer';
import BuilderContext from '../context/BuilderContext';
import useEvents from '../hooks/events/useEvents';
import DnDEvents from './DnDEvents';

const BuilderProvider = ({
    children,
}) => {

    const batcher = useBatcher();
    const refresh = batcher.refresh;
    const abort = batcher.abort;

    const events = useEvents();
    const listeners = events.listeners.current;
    const addEventListener = events.addEventListener;
    const removeEventListener = events.removeEventListener;

    const context = useMemo(() => ({
        batcher: {
            refresh: refresh,
            abort: abort
        },
        events: {
            addEventListener: addEventListener,
            removeEventListener: removeEventListener,
        }
    }), [
        refresh,
        abort,
        addEventListener,
        removeEventListener,
    ]);

    return <BuilderContext.Provider value = {context}>
        <DnDEvents listeners = {listeners} />
        {children}
    </BuilderContext.Provider>
};

export default BuilderProvider;