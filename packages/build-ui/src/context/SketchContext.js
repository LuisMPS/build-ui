import {createContext} from "react";

const SketchContext = createContext({
    batcher: {
        refresh: () => {},
        abort: () => {},
    },
    events: {
        addEventListener: () => {},
        removeEventListener: () => {}
    },
});

export default SketchContext;