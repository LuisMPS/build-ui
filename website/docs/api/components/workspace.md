---
sidebar_position: 3
---

# Workspace

## `<Workspace />`

#### Use 🔧 {#use}

A React component to render the Builder State.

#### Props ⚙️ {#props}

- `view: Object` 

An object representing what will be rendered to the screen for each node in the tree. 
Its keys should be the *'type'* Strings used when nodes are created, and its values should
be React Components. 

:::note
If no view is provided, the Workspace Component will not render anything.
:::

#### Example Usage 🔍 {#example-usage}

```jsx
const MyWorkspace = () => {
    const view = {
        Canvas: CanvasView,
        Button: ButtonView,
        Form: FormView,
    } 
    return <Workspace view = {view} />
}
```







