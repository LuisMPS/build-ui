import {createContext} from "react";

const SketchContext = createContext({
    batcher: {
        refresh: () => {},
        abort: () => {},
    },
});

export default SketchContext;