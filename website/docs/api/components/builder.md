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

- `historyLimit?: int`

The maximum amount of undoes/redoes that can be done. You should pass a very large number if you want the history have no limit.

:::info
Default value for historyBatchTime is **9999999**
:::

- `historyBatchTime?: int`

The amount of time in milliseconds that the batcher timer should wait for the next time batched action before committing to history. (See [this](/docs/api/hooks/use-actions/#return-value) for an explanation).

:::info
Default value for historyBatchTime is **3000**
:::

- `historyBatchTimeLimit?: int`

The maximum amount of time in milliseconds that a batch can last for time batched actions (See [this](/docs/api/hooks/use-actions/#return-value) for an explanation). Ideally, it should be a multiple of historyBatchTime. It should also be greater than historyBatchTime.

:::info
Default value for historyBatchTimeLimit is **6000**
:::

- `children?: React.Children`

React Children that will be provided with the builder state through context.

#### Example Usage 🔍 {#example-usage}

```jsx
import shopTemplate from './templates/shop'

const MyBuilder = () => {
    return <Builder 
        initialTree = {shopTemplate}
        historyLimit = {25}
        initialBatchTime = {4000}
        initialBatchTimeLimit = {12000}
    >
        <TopBar />
        <MyWorkspace />
    </Builder>
}
```