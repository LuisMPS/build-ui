---
sidebar_position: 2
---

# Tutorial

Build-UI interface consists basically of a set of React Components and Hooks for your website builder. Build-UI sticks to React's way of doing things, so stuff like 
composition, modularity and writing declarative code are encouraged.

What we're going to be building in this tutorial, is a simple React page builder
where we will be able to drag and drop customizable Counter Components into 
our Website.

Let's suppose you have a typical Counter Component. Our counter looks something 
like this:

```jsx title="/ui/Counter.js"
const Counter = ({
    initialCount = 0,
    counterText = 'My counter value is:',
}) => {
    const [count, setCount] = useState(initialCount);
    const handleAdd = () => setCount(
        count => count + 1
    );
    const handleSubstract = () => setCount(
        count => count - 1
    );
    return <div>
        <button onClick = {handleSubstract}>
            -
        </button>
        <span>{counterText} {count}</span>
        <button onClick = {handleAdd}>
            +
        </button>
    </div>
}
```

Simple enough, right? A good ol' Counter, nothing new.

Now, with Build UI you create some special components named 'View Components', which wrap the components you add to your page. Let's see an example of a view component:

```jsx title="/ui/CounterView.js"
import {DnDBuilder, useEditor} from "build-ui";
import Counter from "./Counter";

const CounterView = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id
    });
    return <DnDBuilder
        onClick = {editor.handlePanel}
        onDragStart = {editor.handleDragStart}
        onDragEnd = {editor.handleDragEnd}
        draggable = {true}
    >
        <Counter {...props} />
    </DnDBuilder>
}
```

Let's see what's going on here: 

As you can see, your view component will be injected with some props: an id and some props that your Counter Component will receive (Don't worry too much about this yet, we will later see more on this). In our view component, we handle the logic needed for the website builder. 

Build UI ships with a special hook, called [useEditor](/docs/api/hooks/use-editor), that receives the id prop that you were passed in the component and in return, delivers a bag of useful functions that you can use for your site building logic. Here we defined a draggable view component, which means you can drag the component and drop it elsewhere. We could also define a view component to be a droppable component, where you can drop other components, with the handleDrop function we also receive from the editor.

You may have also noticed the [DnDBuilder](/docs/api/components/dnd-builder) Component in which we wrapped our Counter. This is a component to which we pass drag-and-drop events. To us, it looks like a good ol' div element. In fact, it does render as a div element. But internally, [DnDBuilder](/docs/api/components/dnd-builder) handles all drag and drop operations, including *Touch Support*, without us having to worry about its implementation. 

:::info
There might be some cases where you will not want to wrap your components in a div, but rather, render as the Component (like Counter in this case) with DnD functionality; more info [here](/docs/api/components/dnd-builder#dndbuilderhoc))
:::

If you look closely, you can also notice that we coded this component to set the current panel whenever it is clicked on. What does this mean? In Build-UI, panels are components where you customize props for a component. Remember the props we were passed in our View Component earlier for our Counter? A panel lets whoever is building the website to modify what gets passed. Let's quickly see what a panel component would look like:

```jsx title="/ui/CounterPanel.js"
import {useEditor} from "build-ui"

const CounterPanel = ({
    id,
}) => {
    const editor = useEditor({
        id: id
    });
    return <div>
        <input
            name = 'counterText'
            value = {editor.props.counterText}
            onChange = {editor.handleUpdate}
        />
    </div>
}
```

As you can see, the structure is similar: we get passed an id, and we use it in the same useEditor hook. What we extract this time from the hook, are the props that are passed to the view component and a function to update the props from a text input field. Whenever the  update function gets called, it automatically infers it is acting on a text field and updates the prop based on the input's name. With Build UI, it is this easy to create panels to edit your component props!

:::tip GOOD NEWS
You can use the **handleUpdate** function in any input type and the result will be 
automatically casted to a proper value. For example, in a checkbox you will get a 
true/false value, and in a number field you will get a parsed Number.
:::

But how do you even *add stuff* to the site builder? 

Build UI offers some useful functions that let us do this, which we will extract from our [useTools](/docs/api/hooks/use-tools) hook. Build-UI supports drag and drop operations so you can interact with your site builder in this way:

```jsx title="/ui/CounterTools.js"
import {branch, item, useTools, DnDBuilder} from "build-ui"

const CounterTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const counterProps = {
            initialCount: 0,
            counterText: 'My value is:'
        };
        const counter = item({
            type: 'Counter',
            props: counterProps
        })
        const data = branch(counter);
        tools.triggerDragStart({
            data: data,
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
    >
        Counter Drag
    </DnDBuilder>
}
```

:::info
While it is typical for website editors to add stuff via DnD events, you could customize
the behaviour of how stuff is added to the builder. You can add Components in any way
that suits your use case with the triggerCreate function from the [useActions](/docs/api/hooks/use-actions) hook.
:::

Notice how we used a [branch](/docs/api/utility/structures/#branch) and [item](/docs/api/utility/structures/#item) functions? Where did this came from and what are they used for? They are a couple of utility function shipped with Build-UI that allow you to define structures of what will be added to the site builder. In this example, we used it in the simplest of ways. This is where you define the type of what will be added to the builder, which should always be a string (most likely the name of your end component, like Counter), and the props your view component will be passed initially.

Now, it's time for yet another hook: the useBuilder hook. We promised we had undo-redo logic, serialization and other features. This is where you can find them, as shown:

```jsx title="/TopBar.js"
import {useBuilder} from "build-ui";

const TopBar = () => {
    const builder = useBuilder();
    const {
        canUndo,
        canRedo,
        handleRedo,
        handleUndo,
        json,
        // Replot your workspace
        // with another tree with this 
        // loading function below.
        loadTree
    } = builder;
    const handleSave = () => {
        // Maybe let save your work 
        // to a storage service? 
        // Or a database? A file...?
        console.log(json());
    }
    return <div>
        <button onClick = {handleSave}>
            Save
        </button>
        <button 
            disabled = {!canRedo}
            onClick = {handleRedo}
        >
            Redo
        </button>
        <button 
            disabled = {!canUndo}
            onClick = {handleUndo}
        >
            Undo
        </button>
    </div>
}
```

Now, it's time we look at what really glues everything together. It is the [Builder](/docs/api/components/builder) Component, in which we will wrap our site builder. 

We now have built the panel, view and tool components for our Counter. For the sake of not repeating the process, let's suppose we have done the same for a Section Component of our own. A *Section* is simply a div component, with a View Component with logic to allow other components, like our Counter, to be dropped (Remember we said we received the handleDrop function from our useEditor hook). We will kick off our initial website builder with this component where we will be able to drag stuff, such as hundreds of our counters!!

```jsx title="/MyBuilder.js"
import {useState} from "react";
import {Builder, Workspace, Panel, branch} from 'build-ui';
import {CounterView, CounterPanel, CounterTools} from "./ui/counter";
import {SectionView} from "./ui/section";
import TopBar from './TopBar';

const MyBuilder = () => {
    const view = {
        Counter: CounterView,
        Section: SectionView
    };
    const panel = {
        Counter: CounterPanel,
    };
    const section = item({
        type: 'Section',
    })
    const tree = branch(section);
    return <Builder initialTree = {tree}>
        <TopBar />
        <Workspace view = {view}/>
        <Panel view = {panel} />
        <CounterTools />
    </Builder>
}
```

Remember we used a type string when we created our Counter Tool? We do the same here for our the Section in our initial tree. And as you can probably notice, the view object above uses these type strings as keys, to know that to render to the screen.

Et voilà. We have finished creating a very (very) simple page editor where we can drag and drop limitless counters to our page. How cool is that? Well, not much, really 😛😅. But we are sure you can come up with, and start building much more interesting page builders 😄.

For a much more interesting page builder, go check out our [demo](https://luismps.github.io/build-ui/demo) live!
