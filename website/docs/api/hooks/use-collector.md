---
sidebar_position: 4
---

# useCollectors

## `useCollector()`

#### Use 🔧 {#use}

A React hook that provides selectors to get information for a node by providing a query.

#### Signature 🖋️ {#signature-1}

```js
const collected: Object = useCollector({
    selector: Function
});
```

#### Example Usage 🔍 {#example-usage-1}

```jsx
const ButtonView = ({
    id,
    ...props
}) => {
    const selector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: selector
    });
    const editor = useEditor({
        id: id
    });
    return <DnDBuilder
        onDragStart = {!collected.meta.fixed && editor.handleDragStart}
        onDragEnd = {!collected.meta.fixed && editor.handleDragEnd}
        draggable = {!collected.meta.fixed}
    >
        <Button {...props}>
    </DnDBuilder>
}
```

#### Parameters 📥 {#parameters-1}

- `selector: (selectors: Object) => chosen: Function`

A function that takes the available selectors in an object with the selector
functions as values as input, and should return one of the selector functions called
with its respective parameter. (See [example usage](#example-usage-1) to understand better).

:::note AVAILABLE SELECTORS
- `selectById (id: String) => selector: Function`   
Collect a node using its id.

- `selectByIndex (name: String) => selector: Function`   
Collect a node related to a named index.

- `selectRoot () => selector: Function`   
Collect root node.

- `selectParent (id: String) => selector: Function`   
Collect parent of node using its id.

- `selectByFilter (filter: Function) => selector: Function`   
Collect node using a function that iterates through all nodes
and returns true whenever its finds a match.
:::

:::caution
You should use some of the selectors, like selectParent with caution. Remember 
React's data flow, do not opt in for hacky solutions using a collector when there are better solutions using React best practices.
:::

#### Return Value 📤 {#return-value-1}

- `query: Object`

The query object that was collected by the specified selector.

- It has the following keys:

    - `node: Object`

    The collected node.

    :::note
    See [Node](/docs/api/utility/structures/#definitions) for more information about nodes. 
    :::

    - Example Usage:
    ```js
    const type = collected.node.type;
    ```

    - `meta: Object`

    An object with the metadata information for the collected node.

    - Example Usage:
    ```js
    const fixed = collected.meta.fixed;
    ```

    - `indexes: Proxy`

    A proxy object with Boolean values depending on whether the id for the collected node is related to the named index used as the key for the *indexes* object.

    - Example Usage:
    ```js
    // True / False
    const selected = collected.indexes.selected;

    // True / False
    const panel = collected.indexes.panel;
    ```

## `useMultiCollector()`

A React hook that provides selectors to get information for a group node by providing a query.

#### Signature 🖋️ {#signature}

```js
const collected: Object = useMultiCollector(params: Object);
```

#### Example Usage 🔍 {#example-usage}

```jsx
const FormView = ({
    id,
    ...props
}) => {
    const selector = selectors => (
        selectors.selectDirectChildren(id)
    );
    const collected = useMultiCollector({
        selector: selector
    });
    const children = collected.listNodes();
    const hasSubmitButton = children.some(child => (
        element.type === 'Button' && 
        element.props.type = 'submit'
    ));
    const editor = useEditor({
        id: id
    });
    return <DnDBuilder
        onDragStart = {editor.handleDragStart}
        onDragEnd = {editor.handleDragEnd}
        onDrop = {editor.handleDrop}
        draggable = {true}
    >
        <Form {...props}>
        {!hasSubmitButton && <Warning text = {`
            Form has no Submit Button! 
            Drag one and drop here
        `}>}
    </DnDBuilder>
}
```

#### Parameters 📥 {#parameters}

- `selector: (selectors: Object) => chosen: Function`

A function that takes the available selectors in an object with the selector
functions as values as input, and should return one of the selector functions called
with its respective parameter. (See [example usage](#example-usage-2) to understand better).

:::note AVAILABLE SELECTORS
- `selectMultipleById (...id: String) => selector: Function`   
Collect multiple node using their ids.

- `selectMultipleByIndex (index: String) => selector: Function`   
Collect multiple node using a named index list.

- `selectParents (id: String) => selector: Function`   
Collect all ancestors for node using its id.

- `selectDirectChildren (id: String) => selector: Function`   
Collect direct descendant nodes using its id.

- `selectChildren (id: String) => selector: Function`   
Collect all descendant nodes using its id.

- `selectMultipleByFilter (filter: Function) => selector: Function`   
Collect multiple nodes using a function that iterates through all nodes
and returns true whenever its finds a match.
:::

:::caution
You should use some of the selectors, like selectParents with caution. Remember 
React's data flow, do not opt in for hacky solutions using a collector when there are better solutions using React best practices.
:::

#### Return Value 📤 {#return-value}

- `query: Object`

The query object that was collected by the specified selector.

- It has the following keys:

    - `nodes: Object`

    An object with the collected ids as keys and the collected nodes as values.

    :::note
    See [Node](/docs/api/utility/structures/#definitions) for more information about nodes. 
    :::

    - Example Usage:
    ```js
    const type = collected.node[id].type;
    ```

    - `meta: Object`

    An object with the collected ids as keys and the collected metadata for nodes as values.

    - Example Usage:
    ```js
    const type = collected.meta[id].fixed;
    ```

    - `indexes: Object`

    An object with the collected ids as keys and proxy objects that have Boolean values depending on whether the id for the collected node is related to the named list index used
    as the key for the *indexes* object.

    - Example Usage:
    ```js
    // True / False
    const selected = collected.indexes[id].selected;

    // True / False
    const modified = collected.indexes[id].modified;
    ```

    - `listIds: () => [id: String]`

    A function that puts every collected id into an array. 

    - Example Usage:
    ```js
    const ids = collected.listIds();
    ```

    - `listNodes: () => [node: Object]`

    A function that puts every collected node into an array. 

    - Example Usage:
    ```js
    const buttons = collected.listNodes().filter(node => node.type === 'Button');
    ```

    - `listMeta: () => [meta: Object]`

    A function that puts every collected metadata into an array. 

    - Example Usage:
    ```js
    const fixed = collected.listMeta().filter(meta => meta.fixed);
    ```


