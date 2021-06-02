---
sidebar_position: 5
---

# useTools

## `useTools()`

#### Use 🔧 {#use}

A React hook that provides logic for handling drag and drop operations from a toolbar into a site builder.

#### Signature 🖋️ {#signature}

```js
const tools: Object = useTools();
```

#### Example Usage 🔍 {#example-usage}

```jsx
const ComponentTools = props => {
    const tools = useTools();
    const handleDragStart = () => {
        const componentProps = {
            text: 'My Text'
        };
        const component = item({
            type: 'Component',
            props: componentProps
        })
        const data = branch(component);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragStart}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        {...props}
    >
        <Icon />
    </DnDBuilder>
}
```

#### Parameters 📥 {#parameters}

This hooks receives **no** parameters 


#### Return Value 📤 {#return-value}

A function to start dragging a component into the website builder with supplied
metadata. If metadata property is not supplied, it will default to an object with a *create*
property with a true value.

- `triggerDragStart: (obj: Object) => void`
    - `obj: (data: Tree, meta: Object)`


:::note
Click [Here](/docs/api/utility/structures/#definitions) for more information on Tree.
:::

- `handleDragEnd: (event: Event) => void`

A function to be called after dragging a component. It is used as 
a cleanup function for the drag operation. 

:::caution Important!
If you supply a component with the handleDragStart function, you must also support the handleDragEnd. Not doing so will most likely result in errors and unexpected behavior.
:::


