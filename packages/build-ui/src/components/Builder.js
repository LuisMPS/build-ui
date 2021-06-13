import {configureStore} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import BuilderProvider from './BuilderProvider';
import rootReducer from '../slices';
import preloadedTree, {preloadedTreeHistory} from '../slices/preloads/tree';

const Builder = ({
    initialTree,
    initialHistoryLimit,
    initialBatchTime,
    initialBatchTimeLimit,
    initialHistory,
    children,
}) => {
    const initialTreeSlice = preloadedTree({
        initialTree,
        initialHistoryLimit,
        initialBatchTime,
        initialBatchTimeLimit,
    });
    const treePreload = preloadedTreeHistory({
        initialTreeSlice,
        initialHistory,
    });
    // Builder component will most likely
    // be a sub-application, for which
    // having multiple stores is justified.
    // As mentioned from the Redux docs:
    // "Isolating a Redux app as a component 
    // in a bigger application, in which case 
    // you might want to create a store per 
    // root component instance".
    // @see: https://redux.js.org/faq/store-setup
    // Multiple Builder components, however,
    // cannot share any state between them.
    const initialStore = () => configureStore({
        reducer: rootReducer,
        // Allow non-serializable data
        // to be passed down to view
        // components, such as functions.
        // Trade-offs include time-traveling
        // debug problems.
        middleware: [],
        // Configure initial store state
        // to received initialTree prop.
        // (This allows stuff like SSG
        // because no useEffect is 
        // required).
        preloadedState: ({
            tree: treePreload,
        }),
    });
    const [store] = useState(initialStore);
    return <Provider store = {store}>
        <BuilderProvider>
            {children}
        </BuilderProvider>
    </Provider>
}

export default Builder;