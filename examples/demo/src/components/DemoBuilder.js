import {Builder} from "build-ui";
import Demo from './builder/templates/demo';

const DemoBuilder = ({
    children,
}) => {
    return <Builder
        initialTree = {Demo}
        initialHistoryLimit = {9999}
        initialBatchTime = {3000}
        initialBatchTimeLimit = {6000}
    >
        {children}
    </Builder>
}

export default DemoBuilder;