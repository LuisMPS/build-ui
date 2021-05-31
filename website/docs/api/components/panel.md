---
sidebar_position: 4
---

# Panel

## `<Panel />`

#### Use 🔧 {#use}

A React component to render the Builder's Panel.

#### Props ⚙️ {#props}

- `view: Object` 

An object representing what will be rendered to the screen as a **panel** for each node in the tree. Its keys should be the *'type'* Strings used when nodes are created, and its values should be React Components. 

:::note
If no view is provided, the Panel Component will not render anything.
:::

#### Example Usage 🔍 {#example-usage}

```jsx
const MyPanel = () => {
    const view = {
        Canvas: CanvasPanel,
        Button: ButtonPanel,
        Form: FormPanel,
    } 
    return <Panel view = {view} />
}
```







