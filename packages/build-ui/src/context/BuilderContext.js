import {createContext} from "react";

const BuilderContext = createContext({
    batcher: {
        refresh: () => {},
        abort: () => {},
    },
    events: {
        addEventListener: () => {},
        removeEventListener: () => {}
    },
});

export default BuilderContext;