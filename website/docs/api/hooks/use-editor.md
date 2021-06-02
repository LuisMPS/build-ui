---
sidebar_position: 1
---

# useEditor

## `useEditor()`

#### Use 🔧 {#use}

A React hook that provides logic for handling recurring site building operations, such as drag and drop handlers and Component editing.

#### Signature 🖋️ {#signature}

```js
const editor: Object = useEditor({
    id: String,
    onDrop: Function,
    onDropDone: Function,
})
```

#### Example Usage 🔍 {#example-usage}

```jsx
const ComponentView = ({
    id,
    ...props
}) => {
    const onDrop = ({
        transfer, 
        cancel
    }) => {
        const type = transfer.type;
        // Do not allow buttons 
        // inside this Component.
        if (type === 'Button') {
            cancel();
        }
    }
    const editor = useEditor({
        id: id,
        onDrop: onDrop
    });
    return <DnDBuilder
        onDragStart = {editor.handleDragStart}
        onDragEnd = {editor.handleDragEnd}
        onDrop = {editor.handleDrop}
        draggable = {true}
    >
        <Component {...props}>
    </DnDBuilder>
}
```


#### Parameters 📥 {#parameters}

- `id: String` 

The ID of the Component to be edited.

- `onDrop: (bag: Object) => void`

A function to be called whenever something is dropped into this
Component and handled by the **handleDrop** function. The bag object
has properties:

```js
    const {event, transfer, meta, cancel} = bag;
    const {id, type, props, ...rest} = transfer;
    const {create, ...other} = meta;
```

The **event** property refers to the event that triggered the handleDrop function.

The **transfer** property refers to the root node of the tree that is being dragged. Its properties are id, type, props, childIds, parentId. See [Node, Tree](/docs/api/utility/structures/#definitions) for more information

The **meta** property refers to the object passed to the [triggerDragStart](/docs/api/hooks/use-editor/#return-value) function (if any), with an additional *create* Boolean property that determines whether the drop created a new node or the node was only moved.

The **cancel** property is a function to cancel the drop. See [example usage](/docs/api/hooks/use-editor/#example-usage) for useEditor().

- `onDropDone: (bag: Object) => void`

A function to be called whenever an event was succesfully 
handled by the handleDrop function and a new Component will 
be created. The bag object has properties:

```js
    const {event, transfer, meta} = bag;
    const {id, type, props, ...rest} = transfer;
    const {create, ...other} = meta;
```

The **event** property refers to the event that triggered the handleDrop function.

The **transfer** property refers to the root node of the tree that is being dragged. Its properties are id, type, props, childIds, parentId. See [Node, Tree](/docs/api/utility/structures/#definitions) for more information

The **meta** property refers to the object passed to the [triggerDragStart](/docs/api/hooks/use-editor/#return-value) function (if any), with an additional *create* Boolean property that determines whether the drop created a new node or the node was only moved.


#### Return Value 📤 {#return-value}

- `props: Object`

The props for the Component with ID passed as a parameter.

- `meta: Object`

The metadata for the Component with ID passed as a parameter.

:::note
You can learn more about what metadata is [here](/docs/api/hooks/use-actions/#metadata)
:::

- `isTransfering: Boolean`

A flag that indicates whether there is an ongoing drag operation 
for the website builder. Most likely if another Component's
[handleDragStart](/docs/api/hooks/use-editor/#return-value) function was called.

- `handleUpdate: (event: Event, parser?: Function) => void`
    - `parser: (value: any, previousValue: any) => value: any`

A function to update the Component's props from an input field. 

- Example Usage:
```js
const ComponentPanel = ({
    id
}) => {
    const editor = useEditor({
        id: id
    });
    const parser = value => value + 2;
    const handleUpdate = event => (
        editor.handleUpdate(event, parser)
    );
    return <React.Fragment>
        <input
            type = 'number'
            id = 'count'
            name = 'count'
            value = {editor.props.count}
            onChange = {handleUpdate}
        >
        <label htmlFor = 'count'>
            Count Plus 2
        </label>
    </React.Fragment>
}
```

:::info
handleUpdate supports path names, so naming the input like **path_1.path_2.path_3** will deep-set the prop value `{path_1: path_2: path_3: value}`
:::

- `handleMetaUpdate: (event: Event, parser?: Function) => void`
    - `parser: (value: any, previousValue: any) => value: any`

A function to update the Component's metadata from an input field.

:::info
handleMetaUpdate supports path names, so naming the input like **path_1.path_2.path_3** will deep-set the prop value `{path_1: path_2: path_3: value}`
:::

:::note
You can learn more about what metadata is [here](/docs/api/hooks/use-actions/#metadata)
:::

Same usage as [handleUpdate](/docs/api/hooks/use-editor/#return-value) (see example above).

- `handlePanel: (event: Event) => void`

A function to update the Builder's panel. You can pass this function to an event 
listener such as onClick.

- `handleDragStart: (event: Event) => void`

A function to start dragging a component into the website builder. If you wish to supply 
data as you can do with the *HTML API* DataTransfer.setData(), see below for [triggerDragStart()](/docs/api/hooks/use-editor/#return-value).

:::info
With triggerDragStart() you can also supply JS objects as data, not
only strings such it is recommended with DataTransfer.setData().
:::

- `handleDragEnd: (event: Event) => void`

A function to be called after dragging a component. It is used as 
a cleanup function for the drag operation. 

:::caution Important!
If you supply a component with the handleDragStart function, you must also support the handleDragEnd. Not doing so will most likely result in errors and unexpected behavior.
:::

- `handleDrop: (event: Event, position: int) => void`

A function to allow other components to be dropped into the component that listens
to a drop event and handles with this function.

:::note
You will most likely not want to compose this function. You should better
supply onDrop and onDropDone functions as useEditor [paramaters](/docs/api/hooks/use-editor/#parameters)
:::

- `triggerDragStart: (data: Object) => void`

A function to start dragging a component into the website builder with supplied
metadata. If metadata is not supplied, it will default to an object with a *create*
property with a false value.

- Example Usage:

```js
const ComponentView = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id
    });
    const handleDragStart = event => {
        const meta = {
            // Whatever transfer 
            // metadata you want
            // to supply,
            // such as event data.
        }
        editor.triggerDragStart({
            meta: meta
        })
    }
    return <DnDBuilder
        onDragStart = {handleDragStart}
        onDragEnd = {editor.handleDragEnd}
    >
        <Component {...props} />
    </DnDBuilder>
}
```

- `onDragEnter: (handler: Function) => void`

A wrapper function to your dragEnter event handler. You will most likely want to wrap your handleDragEnter functions with this function. If you dont wrap your handlers with this function, your handler will be called even when dragging the same component or parent 
components inside the component's bounds (aka most likely not your expected behavior).

- Example Usage:

```jsx
const ComponentView = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id
    });
    const handleDragEnter = event => (
        editor.handleUpdate(event, parser)
    );
    return <DnDBuilder
        onDrop = {editor.handleDrop}
        onDragEnter = {editor.onDragEnter(handleDragEnter)}
    >
        <Component {...props} />
    </DnDBuilder>
}
```

- `onDrop: (bag: Object) => void`

A mirror of the onDrop function that was passed as an argument to the 
useEditor hook.

- `onDropDone: (bag: Object) => void`

A mirror of the onDropDone function that was passed as an argument to the
useEditor hook.
