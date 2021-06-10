---
sidebar_position: 1
---

# Builder

## `<Builder />`

#### Use 🔧 {#use}

A React Component to provide Builder Context. It is a wrapper for your site builder. Every Component and hook Build UI provides must be under this Builder Context.

#### Props ⚙️ {#props}

- `initialTree?: Tree | Object` 

The initial tree representation that will be used as the builder state.

:::caution
Make sure you pass a valid tree or valid tree representation object. There will be no sanity check, so passing an invalid tree representation will lead to unexpected behavior.
:::

- `initialHistoryLimit?: int`

The maximum amount of undoes/redoes that can be done. You should pass a very large number if you want the history have no limit.

:::info
Default value for historyBatchTime is **9999999**. You can use this prop if you want history state to not grow too large.
:::

- `initialBatchTime?: int`

The amount of time in milliseconds that the batcher timer should wait for the next time batched action before committing to history. (See [this](/docs/api/hooks/use-actions/#return-value) for an explanation).

:::info
Default value for historyBatchTime is **3000**
:::

- `initialBatchTimeLimit?: int`

The maximum amount of time in milliseconds that a batch can last for time batched actions (See [this](/docs/api/hooks/use-actions/#return-value) for an explanation). Ideally, it should be a multiple of historyBatchTime. It should also be greater than historyBatchTime.

:::info
Default value for historyBatchTimeLimit is **6000**
:::

- `initialHistory?: Object` 

The initial tree history representation that will be used as the builder state. Use this prop if you want to keep redo/undo state.

:::note
If you pass initialHistory to the `Builder` Component, all other props to initialize state will be ignored and overriden by initialHistory.
:::

:::caution
Make sure you pass a valid tree history representation object. There will be no sanity check, so passing an invalid state will lead to unexpected behavior.
:::

- `children?: React.Children`

React Children that will be provided with the builder state through context.

#### Example Usage 🔍 {#example-usage}

```jsx
import shopTemplate from './templates/shop'

const MyBuilder = () => {
    return <Builder 
        initialTree = {shopTemplate}
        initialHistoryLimit = {25}
        initialBatchTime = {4000}
        initialBatchTimeLimit = {12000}
    >
        <TopBar />
        <MyWorkspace />
    </Builder>
}
```