import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wishlist",
    initialState: {
        WishProducts: []
    },
    reducers: {
        addWishlist: (state, action) => {
            const MyProduct = state.WishProducts.filter(x => x._id === action.payload._id)
            if (MyProduct.length === 0) {
                state.WishProducts.push({ ...action.payload })
            }
        },
        removeWish: (state, action) => {
            state.WishProducts = state.WishProducts.filter(x => x._id !== action.payload._id)
        }
    },

})

export const { addWishlist, removeWish } = wishSlice.actions;
export default wishSlice.reducer;