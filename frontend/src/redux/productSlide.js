import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    cartItem: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            console.log(action)
            state.productList = [...action.payload];
        },
        addCartItem: (state, action) => {
            const check = state.cartItem.some((el) => el._id === action.payload._id);
            if (check) {
                alert("Already Present in Cart");
            } else {
                alert("Item Add successfully");
                const total = parseInt(action.payload.price);
                state.cartItem = [
                    ...state.cartItem,
                    { ...action.payload, qty: 1, total: total },
                ];
            }
        },
        deleteCartItem: (state, action) => {
            // alert("one Item Delete");
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            state.cartItem.splice(index, 1);
            // console.log(index);
        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            const qtyInc = ++qty;
            state.cartItem[index].qty = qtyInc;

            const price = state.cartItem[index].price.slice(3); //change
            const total = price * qtyInc;

            state.cartItem[index].total = total;
        },
        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            if (qty > 1) {
                const qtyDec = --qty;
                state.cartItem[index].qty = qtyDec;

                const price = state.cartItem[index].price.slice(3); //change
                const total = price * qtyDec;

                state.cartItem[index].total = total;
            }
        },
    },
});

export const {
    setDataProduct,
    addCartItem,
    deleteCartItem,
    increaseQty,
    decreaseQty,
} = productSlice.actions;

export default productSlice.reducer;

