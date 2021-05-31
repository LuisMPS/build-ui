import {useContext} from "react";
import ViewContext from "../context/ViewContext";

const useView = () => {
    const context = useContext(ViewContext);
    return context;
}

export default useView;