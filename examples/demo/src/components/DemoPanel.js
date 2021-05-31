import dynamic from "next/dynamic";
import {Panel} from "build-ui";
import {CanvasPanel} from "./builder/ui/canvas";

const DemoPanel = props => {
    const view = {
        Canvas: CanvasPanel,
        Text: dynamic(() => import('./builder/ui/text/TextPanel')),
        Section: dynamic(() => import('./builder/ui/section/SectionPanel')),
        Image: dynamic(() => import('./builder/ui/image/ImagePanel')),
        Alert: dynamic(() => import('./builder/ui/alert/AlertPanel')), 
        Button: dynamic(() => import('./builder/ui/button/ButtonPanel')),
        Link: dynamic(() => import('./builder/ui/link/LinkPanel')),
        Grid: dynamic(() => import('./builder/ui/grid/GridPanel')),
    }; 
    return <Panel
        view = {view} 
        {...props} 
    />
}

export default DemoPanel;