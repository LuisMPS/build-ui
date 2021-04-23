import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../slices';

export default configureStore({
    reducer: rootReducer,
});