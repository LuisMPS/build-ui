import DemoBuilder from "../src/components/DemoBuilder";
import BuilderGrid from "../src/components/layout/BuilderGrid";
import Header from "../src/components/layout/Header";

const Home = () => {
    return <div>
        <Header />
        <DemoBuilder>
            <BuilderGrid />
        </DemoBuilder>
    </div>
}

export default Home;