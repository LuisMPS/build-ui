import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {configureHistory, configureBatchHistory} from "../slices/tree";
import {useIsomorphicLayoutEffect} from "../hooks/useIsomorphicLayoutEffect";
import SketchProvider from "./SketchProvider";

const Sketch = ({
    historyLimit = 99999,
    historyBatchTime = 3000,
    historyBatchTimeLimit = 6000,
    children,
}) => {
    const dispatch = useDispatch();
    const [configured, setConfigured] = useState(false);
    const [configuration] = useState({
        historyLimit: historyLimit,
        historyBatchTime: historyBatchTime,
        historyBatchTimeLimit: historyBatchTimeLimit,
    });
    // Effect to configure 
    // history batching
    useIsomorphicLayoutEffect(() => {
        if (configured) return;
        dispatch(configureHistory({
            configuration: configuration,
        }));
        dispatch(configureBatchHistory({
            configuration: configuration,
        }));
    }, [
        dispatch,
        configuration,
        configured,
    ]);
    // Effect to set configured
    // flag on initial render.
    useIsomorphicLayoutEffect(() => {
        if (configured) return;
        setConfigured(true);
    }, [
        configured
    ]);
    return <SketchProvider>
        {children}
    </SketchProvider>
}

export default Sketch;