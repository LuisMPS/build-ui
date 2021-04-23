import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {configureHistory, configureBatchHistory} from "../slices/tree";
import {useReplacer} from "../hooks/useComposed";
import {useIsomorphicLayoutEffect} from "../hooks/useIsomorphicLayoutEffect";
import Sketcher from "./Sketcher";

const Sketch = ({
    initialTree,
    initialMeta, 
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
    const replacer = useReplacer({
        initialMeta: initialMeta,
    });
    const replaceTree = replacer.handleReplace;
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
    useIsomorphicLayoutEffect(() => {
        if (prepared) return;
        setPrepared(true);
    }, [
        prepared
    ]);
    return prepared && <div>
        <Sketcher>
        {children}
        </Sketcher>
    </div>
}

export default Sketch;