import {Builder} from "build-ui";
import Demo from './builder/templates/demo';

const DemoBuilder = ({
    children,
}) => {
    return <Builder 
        initialTree = {Demo}
        historyLimit = {999999}
        historyBatchTime = {3000}
        historyBatchTimeLimit = {6000}
    >
        {children}
    </Builder>
}

export default DemoBuilder;