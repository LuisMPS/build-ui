# Build-UI for React JS

Build-UI is a simple library thought for React developers packed with fetures that allow them to effortlessly create website builders. It comes with drag and drop functionality, undo-redo logic, site serialization and deserialization along with some other interesting tools out of the box. Because of the way it is built, it also supports other features such as SSR and component dynamic loading without you having to worry about their implementations.

# Overview
___

With Build-UI, you can create anything from a very simple to a fully-featured website builder. Build-UI lets you create your website builder on top of your own or third-party React Components. With Build-UI, you only need a lightweight extra layer of code to handle website-building logic, which is made as simple and as transparent as possible.

# Instalation
___

Currently, Build-UI is an early-stage project in development phase. You can install via npm with the command:

```
npm install --save build-ui
```

# Demos
___

Coming soon! Cool demos are in our to-do list! You can also follow along our tutorial to see Build-UI in action.

# Tutorial
___

Build-UI offers a set of React Components and tools to begin coding your website builder. Build-UI takes full advantage of component composition and sticks to React'w way of doing things. That's why it is possible to use your own components in your website builder. Let's explain what this all means:

Let's suppose you have a typical Counter Component, and you want your users to be able to add this Counter to their pages using the website builder. Our counter looks something like this:

```js
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

Simple enough, right? 

Now, with Build-UI you create some special components named 'View Components', which wrap the components you to add to your page. Let's see an example of a view component:

```js
import {DnDBuilder, useEditor} from "build-ui";
import Counter from "./Counter";

const CounterView = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id
    });
    const {
        handlePanel,
        handleDragStart,
        handleDragEnd,
    } = editor;
    return <DnDBuilder
        onClick = {handlePanel}
        onDragStart = {handleDragStart}
        onDragEnd = {handleDragEnd}
        draggable = {true}
    >
        <Counter {...props} />
    </DnDBuilder>
}
```

Let's see what's going on here: as you can see, your view component will be injected with some props: an id and some props that your end component will receive (Don't worry too much about this yet, we will later on see how this is done). In our view component, we handle the logic needed for the website builder. Build UI ships with a special hook, called useEditor, that receives the id prop that you were passed in the component and in return, delivers a bag of useful functions that you can use for your site building logic. Here we defined a draggable view component, which means you can drag the component and drop elsewhere. We could also define a view component to be a droppable component, where you can drop other components, with the handleDrop function we receive from the editor.

You may have also noticed the DnDBuilder Component in which we wrapped our Counter. This is a component to which we pass drag-and-drop events. To us, it looks like a good ol' div element. But internally, it handles all drag and drop operations, including Touch Support, without us having to worry about its implementation. Notice that you could also use a div instead, but you would have to implement touch support yourself.

If you look closely, you can also notice that we coded this component to set the current panel whenever it is clicked on. What does this mean? It is fairly simple: Build-UI defines a panel component where you can edit the props that are passed to our view component. Let's quickly see what a panel component would look like:

```js
import {useEditor} from "build-ui"

const CounterPanel = ({
    id,
}) => {
    const editor = useEditor({
        id: id
    });
    const {
        handleUpdate,
        props
    } = editor;
    return <div>
        <input
            name = 'counterText'
            value = {props.counterText}
            onChange = {handleUpdate}
        />
    </div>
}
```

As you can see, the structure is somewhat similar: we get passed an id, and we use it in the same hook. What we extract this time from the hook, are the props that are passed to the view component and a function to update the props from a text input field. With Build-UI, it is this easy to create panels to edit your component props!

But how do you even add things to the site builder? That's what we are about to see. 

Build-UI is not opinionated in how we should add stuff to our site, but offers some useful functions that let us do this, with our useTools hook. Build-UI supports drag and drop operations so you can interact with your site builder in this way, but you could define interaction with the site builder in any other way you can think of! For this tutorial, we'll use drag and drop functionality:

```js
import {branch, item, useTools, DnDBuilder} from "build-ui"

const CounterTools = () => {
    const tools = useTools();
    const {
        triggerDragStart,
        handleDragEnd,
        // Be aware that you can also 
        // add components to the builder
        // in any way you want to.
    } = tools;
    const handleCreate = event => {
        event.stopPropagation();
        const counterProps = {
            initialCount: 0,
            counterText: 'My value is:'
        };
        const data = branch(
            item({
                type: 'Counter',
                props: counterProps
            })
        );
        triggerDragStart({
            data: data,
        });
    }
    return <DnDBuilder
        onDragStart = {handleCreate}
        onDragEnd = {handleDragEnd}
        draggable = {true}
    >
        Counter Drag
    </DnDBuilder>
}
```

Notice how we used a branch and item functions? Where did this came from and what is it used for? Well, they are a couple of utility function shipped with Build-UI that allow you to define structures. In this case, what will be added to the site builder. In this example, we used it in the simplest of ways. This is where you define the type of what will be added to the builder, which should always be a string (most likely the name of your end component, like Counter), and the props your view component will be passed initially.

Now, it's time for yet another hook: the useBuilder hook. We promised we had undo-redo logic, serialization and other features. This is where you can find them, as shown:

```js
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

Now, it's time we look at what really glues everything together. It is the **Builder** component, where you will have all of the site builder information. We now have built the panel, view and tool components for our counter. For the sake of not repeating the process, let's suppose we have done the same for a Section Component of our own. A section is simply a div component, with a View where we define that we can drop other components. We will kick off our initial display with this component where we will be able to drag stuff, such as hundreds of our counters!!

```js
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
```

Remember we used a type string when we created our Counter Tool? We do the same here for our the Section in our initial tree. And as you can probably tell, the view object above uses these type strings as keys, to know that to render to the screen.

Et voilà. We have finished creating a very (very) simple page editor where we can drag and drop limitless counters to our page. How cool is that? Well, not much, really :P. But we are sure you can come up with, and start building much more interesting page builders :)
