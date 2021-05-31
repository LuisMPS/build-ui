---
sidebar_position: 2
---

# Lazy Loading Views

### Problem

Suppose you have a page builder with 25+ different view components, some of which are used very frequently and some other are used rarely. Imagine some of your components have some heavy logic, so bundle size might get quite large. This can turn into a problem as our page will become bloated with components your user might not even use and our page loading times will increase. These are not good news 😢😢...

Luckily, Build UI supports Component Lazy Loading 🎈🥳.

### Approach

You can take your preferred approach for lazy loading component. Options include React built-in [Lazy API](https://reactjs.org/docs/code-splitting.html) on the client side, or other alternatives like [dynamic importing](https://nextjs.org/docs/advanced-features/dynamic-import) components if you are using a SSR framework like Next JS. 


### Implementation

Example below is an implementation using Next JS dynamic API.

```jsx
import dynamic from "next/dynamic"
import CanvasView from "./builder/ui/canvas/CanvasView"

const MyWorkspace = () => {
    // Dynamically import Components
    // only when they are used. For 
    // components that will be used
    // on an initial render, for
    // example, you can use a regular
    // import.
    const view = {
        Canvas: CanvasView,
        Text: dynamic(() => import('./builder/ui/text/TextView')),
        Section: dynamic(() => import('./builder/ui/section/SectionView')),
        Image: dynamic(() => import('./builder/ui/image/ImageView')),
        // ....
        // Other Views
        // ....
    }
    return <Workspace view = {view} />
}
```

### Demonstration

Check the 'Sources' Dev Tools to verify it does work.

![Lazy Loading](/img/guides/lazy-loading.gif)

