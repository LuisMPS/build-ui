---
sidebar_position: 2
---

# DnDBuilder

## `<DnDBuilder />` {#dndbuilder}

#### Use 🔧 {#use-1}

A React component to handle drag and drop operations. 

Popular opinion: HTML API for drag and drop sucks. It is full of inconsistencies and does not have built-it touch support. DnDBuilder Component tries to ammend that by providing a simpler interface with integrated *Touch Support*. 

#### Props ⚙️ {#props}

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
const SectionView = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id
    });
    return <DnDBuilder
        onDrop = {editor.handleDrop}
        onDragStart = {editor.handleDragStart}
        onDragEnd = {editor.handleDragEnd}
        allowTouch = {true}
        dragTouchTimeThreshold = {150}
        // Section Props
        as = {Section}
        {...props}
    >
}
```

## `DnDBuilderHOC()`

#### Use 🔧 {#use-2}

A [Higher Order Component](https://reactjs.org/docs/higher-order-components.html) that wraps your components to get a component that behaves like DnDBuilder (i.e. handles drag and drop operations).

In many cases you will not want to have to have extra markup just to handle drag and drop operations, such as when wrapping your components in a DnDBuilder with no specified *'as'* prop. This can cause trouble when you do stuff like styling. 

[DnDBuilder](#props) has an *'as'* prop to render a custom component. All DnDBuilderHOC does is to pass your component as the *'as'* prop to a DnDBuilder, so you could do that instead. We think, however, that having another component with its own name has more expressive power, because when reading the code, you will immediatly know you're rendering a `<BuilderSection />` component, for example.

#### Signature 🖋️ {#signature}

```js
const BuilderComponent: React.Component = DnDBuilderHOC(component : React.Component | String);
```

#### Example Usage 🔍 {#example-usage-2}

```jsx
import Section from './Section'

const BuilderSection = DnDBuilderHOC(Section);
```

#### Parameters 📥 {#parameters}

- `component: React.Component | String`

The React Component (or HTMLElement string type) that will be rendered as root component when rendering the returned component.

:::caution
If you choose to use DnDBuilderHOC, the argument component will **need** to use React's [forwardRef](https://reactjs.org/docs/forwarding-refs.html) API. Otherwise, the component will not work as expected.
:::

#### Return Value 📤 {#return-value}

- `BuilderComponent: React.Component`

A React Component with the same behavior as [DnDBuilder](#dndbuilder) (will receive the same props) but that will render as the component passed as parameter.

