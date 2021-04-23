import {useContext} from "react"
import SketchContext from "../context/SketchContext"

const useSketchContext = () => {
    const context = useContext(SketchContext);
    return context;
}

export default useSketchContext;