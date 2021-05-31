---
sidebar_position: 5
---

# Node

## `<Node />`

#### Use 🔧 {#use}

A React Component to render a particular node, and optionally, all of its children.

#### Props ⚙️ {#props}

- `id: String` 

The ID of the node to collect.

- `view: Object` 

An object representing what will be rendered to the screen for the node with the given id. Its keys should be the *'type'* Strings used when nodes are created, and its values should be React Components. 

You should pass this view component for all types since Node initially only knows the id from the passed prop and does not know the type. The type and what to render is inferred by collecting the node's data through its id.

:::note
If no view is provided, the Node Component will not render anything.
:::

- `shallow: Boolean` 

Flag to indicate whether or not to render the node's children as well. If it is true,
Node will only render node with id.

:::info
Default value for this prop is **false**.
:::

#### Example Usage ** 🔍 {#example-usage}

```jsx
const Watcher = ({
    view,
}) => {
    const selector = selected => (
        selectors.selectByIndex('watch')
    );
    const collected = useCollector({
        selector: selector,
    })
    return <Node
        id = {collected.node.id} 
        view = {view} 
        shallow = {true}
    />
}
```

- ** See more about [useCollector.](/docs/api/hooks/use-collector)







