---
sidebar_position: 2
---

# useBuilder

## `useBuilder()`

#### Use 🔧 {#use}

A React hook that provides a set of utilities to retrieve the current builder state and builder history.

#### Signature 🖋️ {#signature}

```js
const builder: Object = useBuilder();
```

#### Example Usage 🔍 {#example-usage}

```jsx
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

#### Parameters 📥 {#parameters}

This hooks receives **no** parameters


#### Return Value 📤 {#return-value}

- `json: () => tree: Object`

Return an object representation of the current builder state.

:::note
The returned tree object might or might not be serializable. It will **not** 
be serializable if you lifted data, such as a node props, with non-serializable
values like functions.
:::

- `loadTree: (tree: Tree | Object) => void`

Loads builder state, must likely previously returned from the [json()](/docs/api/hooks/use-builder/#return-value) function. It should be a valid object representation of a builder state. Providing a non-valid builder representation will have unexpected behavior.

:::note
The tree object to load can, in theory, be non-serializable. Build UI uses Redux internally, so make sure you understand the [drawbacks](https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state) before loading non-serializable values.
:::

- `canUndo: Boolean`

Flag that indicates whether there are any actions to undo.

- `canRedo: Boolean`

Flag that indicates whether there are any actions to redo.

- `handleUndo: () => void`

Function to handle a history undo.

:::note
If handleUndo is called when there are no actions to undo, it will
not do anything
:::

- `handleRedo: () => void`

Function to handle a history redo.

:::note
If handleRedo is called when there are no actions to redo, it will
not do anything
:::

- `history: Object`

An object representation of the current builder history. You should treat is as a
read-only property, so modifying this object will not modify the actual builder history.


