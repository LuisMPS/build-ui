import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import rootReducer from '../slices';
import Sketch from './Sketch';

const Builder = ({
    initialTree,
    historyLimit,
    historyBatchTime,
    historyBatchTimeLimit,
    serializable = true,
    children,
}) => {
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
        middleware: getDefaultMiddleware({
            serializableCheck: serializable,
        }),
    });
    const [store] = useState(initialStore);
    return <Provider store = {store}>
        <Sketch 
            initialTree = {initialTree}
            historyLimit = {historyLimit}
            historyBatchTime = {historyBatchTime}
            historyBatchTimeLimit = {historyBatchTimeLimit}
        >
            {children}
        </Sketch>
    </Provider>
}

export default Builder;