import { createSlice } from "@reduxjs/toolkit";

const AddToCartSlice = createSlice({
    name: 'AddToCartList',
    initialState: {
        addToCartItems: [],
        totalBillAmount: 0
    },
    reducers: {
        addItemsToCart(state, actions) {
            state.addToCartItems.push(actions.payload);
        },
        removeItemsFromCart(state, actions) {
            return {
                addToCartItems: [...state.addToCartItems.slice(0, actions.payload), ...state.addToCartItems.slice(actions.payload + 1)],
                totalBillAmount: state.totalBillAmount,
            }
        },
        increaseItem(state, actions) {
            state.addToCartItems[actions.payload].quantity = state.addToCartItems[actions.payload].quantity + 1;
        },
        decreaseItem(state, actions) {
            state.addToCartItems[actions.payload].quantity = state.addToCartItems[actions.payload].quantity - 1;
        },
        setTotalAmount(state, actions) {
            state.addToCartItems[actions.payload].totalAmount = state.addToCartItems[actions.payload].quantity * state.addToCartItems[actions.payload].price;
        },
        setTotalBillAmount(state, actions) {
            state.totalBillAmount = actions.payload;
        }
    }
});

export const { addItemsToCart, removeItemsFromCart, increaseItem, decreaseItem, setTotalAmount, setTotalBillAmount } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;