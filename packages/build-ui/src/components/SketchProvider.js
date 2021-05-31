import React from 'react';
import {useMemo} from 'react';
import {useBatcher} from '../hooks/useTimer';
import SketchContext from '../context/SketchContext';
import useEvents from '../hooks/events/useEvents';
import DnDEvents from './DnDEvents';

const SketchProvider = ({
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

    return <SketchContext.Provider value = {context}>
        <DnDEvents listeners = {listeners} />
        {children}
    </SketchContext.Provider>
};

export default SketchProvider;