---
sidebar_position: 6
---

# DnDListener

## `<DnDListener />`

#### Use 🔧 {#use}

A React component to handle drag and drop operations, mixing custom behavior and standard HTML DnD behavior for better experience.

It listens to drag and drop operations for a specified transfer type. More about transfer types [here](/docs/api/hooks/use-dnd).

:::info
You will find that most props are the same to those in [DnDBuilder](/docs/api/components/dnd-builder). This is because DnDBuilder is a composition of a DnDListener with its **listenTransferType** prop set to "builder".
:::

#### Props ⚙️ {#props}

- `listenTransferType: String`

String representing the transfer type to listen to on a drag operation.

:::note
See [this](/docs/api/hooks/use-dnd) for more information on transfer types.
:::

- `listenAny: Boolean`

Flag that indicates whether component should listen to any transfer type on a drag  operation.

:::note
See [this](/docs/api/hooks/use-dnd) for more information on transfer types.
:::

- `onDrop?: (event: Event) => void`

Event handler for drop event.

- `onDragStart?: (event: Event) => void` 

Event handler for drag start event.

- `onDragEnd?: (event: Event) => void` 

Event handler for drag end event.

- `onDragOver?: (event: Event) => void` 

Event handler for drag over event.

- `onDragEnter?: (event: Event) => void` 

Event handler for drag enter event. It will be called whenever the target element is the top most element on the screen with an onDragEnter handler.

:::info
This event behavior is different from HTML **dragenter** event. It is implemented by Build UI because we think it suits use cases better and provides a better experience. 
:::

- `onDragLeave?: (event: Event) => void` 

Event handler for drag enter event. It will be called wheneve another target with set onDragEnter handler is entered **or** when leaving bounds of element.

:::info
This event behavior is different from HTML **dragleave** event. It is implemented by Build UI because we think it suits use cases better and provides a better experience. 
:::

- `onDragIn?: (event: Event) => void` 

Event handler for drag in event. It will be triggered whenever a drag operation leaves bounds of target element.

:::note
This is not standard HTML API. It is implemented by Build UI because we think it suits use cases better and provides a better experience.
:::

- `onDragOut?: (event: Event) => void`

Event handler for drag out. It will be triggered whenever a drag operation leaves bounds of target element.

:::note
This is not standard HTML API. It is implemented by Build UI because we think it suits use cases better and provides a better experience.
:::

- `allowTouch?: Boolean` 

Boolean flag to indicate whether or not to add touch support for drag and drop events.

:::info
Default value for allowTouch prop is **true**
:::

- `dragTouchTimeThreshold?: int` 

Time in milliseconds (ms) required to trigger a drag start operation for touch screens. (i.e. a screen user must press the screen for as long as the prop value to fire a drag operation).

:::info
Default value for dragTouchTimeThreshold prop is **200**
:::

- `as?: React.Component | String` 

:::info
Default value for as prop is **'div'**
:::

- `ref?: React.MutableRefObject`

A reference to DOM node of root component. If no *'as'* prop is specified, a reference to default div element.

:::note
If the root element is a custom React component, this component will need to use React's [forwardRef](https://reactjs.org/docs/forwarding-refs.html) API in order to work. Otherwise, the component will not be able to forward the ref.
:::

___
:::note
Any other prop not explicitely mentioned above, will be forwarded to the root
component rendered with the *'as'* prop.
:::
___



#### Example Usage 🔍 {#example-usage-1}

```jsx
const DnDLayers = props => {
    return <DnDListener
        {...props}
        listenTransferType = 'layers'
    />
}
```