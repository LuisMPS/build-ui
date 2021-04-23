import React from 'react';
import {useMemo} from 'react';
import {useBatcher} from '../hooks/useTimer';
import SketchContext from '../context/SketchContext';

const Sketcher = ({
    children,
}) => {
    const batcher = useBatcher();
    const refresh = batcher.refresh;
    const abort = batcher.abort;
    const context = useMemo(() => ({
        batcher: {
            refresh: refresh,
            abort: abort
        },
    }), [
        refresh,
        abort,
    ]);
    return <SketchContext.Provider value = {context}>
        {children}
    </SketchContext.Provider>
};

export default Sketcher;