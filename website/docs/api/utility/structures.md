---
sidebar_position: 1
---

# Structures

## Definitions {#definitions}

Before describing the API for this section, let's quickly mention what a node is and what a tree is in Build UI:

:::note DEFINITION
- **Tree**: a structure that defines a [normalized](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) form of a tree hierarchy.
- **Node**: a structure that defines a [normalized](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) form of a tree node. 
:::

:::info
Build UI internally uses these node and tree structures to represent builder state. You will not need to think about this, though. The API also exposes a couple of functions to define these structures whenever you need to.
:::

## `item()`

#### Use 🔧 {#use}

A function used to instantiate a [Node](#definitions) object.

#### Signature 🖋️ {#signature-1}

```js
const node: Node = item({
    type: String,
    props: Object,
    __id__?: String,
});
```

#### Example Usage 🔍 {#example-usage-1}

```jsx
const button = item({
    type: 'Button',
    props: {text: 'My Button'}
})
.with_meta({
    fixed: true,
})
.with_index(
    'panel', 
)
.with_index_list(
    'selected'
);
```

#### Parameters 📥 {#parameters-1}

- `configuration: Object`

An object with required `type` key, and optional `props`, and **`__id__` (See [itemid()](#itemid) for nuances) keys with their respective values. 

#### Return Value 📤 {#return-value-1}

A [Node](#definitions) with the provided configuration. The node instance has the following methods:

- `with_meta: (meta: Object) => node: Node`

A function to initialize the node with a list of indexes. If not provided, the default metadata for the node is an object with a key *id* and the assigned id as its value. It returns a node instance with the current node configuration plus the passed metadata

- `with_index: (...index: String) => node: Node`

A function to initialize the node with a list of named indexes. It returns a node instance configured with the passed metadata. It returns a node instance with the current node configuration plus the passed named indexes.

- `with_index_list: (...index: String) => node: Node`

A function to initialize the node with a list of named list indexes. It returns a node instance with the meta object assigned. It returns a node instance with the current node configuration plus the passed named index lists.


:::note
Please notice that the return value is not a plain JS object. It is an instance of a class. 
:::

## `branch()`

#### Use 🔧 {#use}

A function used to instantiate a [Tree](#definitions) object.

#### Signature 🖋️ {#signature-2}

```js
const tree: Tree = branch(node: Node);
```

#### Example Usage 🔍 {#example-usage-2}

```jsx
const section = item({
    type: 'Section'
});
const subsection = item({
    type: 'Section'
});
const button = item({
    text: 'Button',
    props: {text: 'My Button'}
});
const button = (
    branch(section)
    .with_child(
        branch(subsection)
        .with_child(button)
    )
);
```

#### Parameters 📥 {#parameters-2}

- `node: Node`

The root node for the created tree.

#### Return Value 📤 {#return-value-2}

A [Tree](#definitions) with the provided configuration. The tree instance has the following methods:

- `with_child: (node: Node | tree: Tree) => tree: Tree`

A function used to append a child to a tree. The child can itself be another tree.

:::note
Please notice that the return value is not a plain JS object. It is an instance of a class. 
:::

## `itemid()` {#itemid}

#### Use 🔧 {#use}

A function used to generate a random id for a [Node](#definitions), using the *\__id__* property. You should only use it when necessary; otherwise an auto-generated is a better option.

:::caution
Use this function only when necessary. Having duplicate id's for Nodes in the builder state will cause Nodes to be overwritten.  
:::

#### Signature 🖋️ {#signature-3}

```js
const id: String = itemid(int: size);
```

#### Example Usage 🔍 {#example-usage-3}

```jsx
const id = itemid();
const button = item({
    __id__: id,
    type: 'Button'
})
```

#### Parameters 📥 {#parameters-2}

- `size: int`
The length of the id string.

#### Return Value 📤 {#return-value-2}

A randomly generated string id.