import {useContext} from "react"
import BuilderContext from "../context/BuilderContext"

const useBuilderContext = () => {
    const context = useContext(BuilderContext);
    return context;
}

export default useBuilderContext;