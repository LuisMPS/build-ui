import {Builder, Workspace, Panel, branch, item} from 'build-ui';
import {CounterView, CounterPanel, CounterTools} from "./ui/counter/"
import {SectionView} from "./ui/section";
import TopBar from "./TopBar";

const MyBuilder = () => {
    const view = {
        Counter: CounterView,
        Section: SectionView
    };
    const panel = {
        Counter: CounterPanel,
    };
    const tree = branch(
        item({
            type: 'Section',
        })
    );
    return <Builder initialTree = {tree}>
        <TopBar />
        <Workspace view = {view}/>
        <Panel view = {panel} />
        <CounterTools />
    </Builder>
}

export default MyBuilder;