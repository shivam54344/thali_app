import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './ItemSlice';
import addToCartReducer from './AddToCartSlice';

const ReduxStore = configureStore({
    reducer: {
        itemList: itemReducer,
        addToCartList : addToCartReducer,
    }
});

export default ReduxStore;