import DemoPanel from "../DemoPanel"
import DemoLayers from "../layers/demo/DemoLayers"
import useStyle from "./style/SideBar";

const SideBar = props => {
    return <div {...props} />
}

const SidebarPanel = props => {
    const classes = useStyle();
    return <div  {...props}>
        <div className = {classes.head}>
            <p className = {classes.title}>
                Panel
            </p>
        </div>
        <div className = {classes.content}>
            <DemoPanel />
        </div>
    </div>
}

const SidebarLayers = props => {
    const classes = useStyle();
    return <div  {...props}>
        <div className = {classes.head}>
            <p className = {classes.title}>
                Layers
            </p>
        </div>
        <div>
            <DemoLayers />
        </div>
    </div>
}

export default SideBar;
export {SidebarLayers, SidebarPanel};