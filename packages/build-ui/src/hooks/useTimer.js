import {useCallback, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getBatchConfiguration} from "../history/selectors/version";
import {getTreeSlice} from "../selectors";
import {commitHistory} from "../slices/tree";
import createTimer from '../history/utils/timer'

const useTimer = ({
    initialOnStart = () => {},
    initialOnUpate = () => {},
    initialOnFinish = () => {},
    configuration,
}) => {
    const [timer] = useState(createTimer());
    const [onStart, setOnStart] = useState(
        () => initialOnStart
    );
    const [onUpdate, setOnUpdate] = useState(
        () => initialOnUpate
    );
    const [onFinish, setOnFinish] = useState(
        () => initialOnFinish
    );  
    const start = useCallback(() => {
        const done = () => {
            onFinish();
        }
        const error = () => {}
        timer.run(configuration)
        .then(done)
        .catch(error);
        // Call start handler
        onStart();
    }, [
        timer,
        onStart,
        onFinish,
        configuration,
    ]);
    const update = useCallback(() => {
        timer.update();
        // Call update handler
        onUpdate();
    }, [
        timer,
        onUpdate,
    ]);
    // Imperative handler for
    // refreshing timer
    const refresh = useCallback(() => {
        const running = timer.running;
        if (running) update();
        else start();
    }, [
        timer,
        update,
        start,
    ]);
    const abort = useCallback(() => {
        timer.abort();
    }, [
        timer
    ]); 
    // Clean up effect
    useEffect(() => {
        return abort;
    }, [
        abort
    ]);
    const utils = {
        refresh: refresh,
        abort: abort,   
    }
    const timerBag = {
        setOnStart: setOnStart,
        setOnUpdate: setOnUpdate,
        setOnFinish: setOnFinish,
    }
    const bag = {
        ...timerBag,
        ...utils
    };
    return bag;
}

const useBatcher = () => {
    const selector = store => getBatchConfiguration(
        getTreeSlice(store)
    );
    const configuration = useSelector(selector);
    const dispatch = useDispatch();
    const initialOnFinish = () => {
        dispatch(commitHistory({}))
    }
    const batcher = useTimer({
        initialOnFinish: 
        initialOnFinish,
        configuration:
        configuration,
    });
    return batcher;
}

export default useTimer;
export {useBatcher};