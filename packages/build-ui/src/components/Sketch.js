import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {configureHistory, configureBatchHistory} from "../slices/tree";
import {useReplacer} from "../hooks/useComposed";
import {useIsomorphicLayoutEffect} from "../hooks/useIsomorphicLayoutEffect";
import SketchProvider from "./SketchProvider";

const Sketch = ({
    initialTree,
    historyLimit = 99999,
    historyBatchTime = 3000,
    historyBatchTimeLimit = 6000,
    children,
}) => {
    // Make sure to only render
    // initial tree once on
    // mount to avoid rerendering 
    // whole tree when parent or
    // this sketch component is 
    // rerendered. 
    const dispatch = useDispatch();
    const [prepared, setPrepared] = useState(false);
    const [tree] = useState(initialTree);
    const [configuration] = useState({
        historyLimit: historyLimit,
        historyBatchTime: historyBatchTime,
        historyBatchTimeLimit: historyBatchTimeLimit,
    });
    const replacer = useReplacer();
    const replaceTree = replacer.handleReplace;
    // Effect to replace initial
    // tree if any was passed.
    useIsomorphicLayoutEffect(() => {
        if (prepared || !tree) return;
        replaceTree({
            tree: tree,
        });
        setPrepared(true);
    }, [
        replaceTree,
        tree, 
        configuration,
        prepared
    ]);
    // Effect to configure 
    // history batching
    useIsomorphicLayoutEffect(() => {
        if (prepared) return;
        dispatch(configureHistory({
            configuration: configuration,
        }));
        dispatch(configureBatchHistory({
            configuration: configuration,
        }));
    }, [
        dispatch,
        configuration,
        prepared
    ]);
    // Effect to set prepare
    // flag on initial render.
    useIsomorphicLayoutEffect(() => {
        if (prepared) return;
        setPrepared(true);
    }, [
        prepared
    ]);
    return prepared && <SketchProvider>
        {children}
    </SketchProvider>
}

export default Sketch;