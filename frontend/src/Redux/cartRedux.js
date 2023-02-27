import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            const MyProduct = state.products.filter(x => x._id === action.payload._id)
            if (MyProduct.length === 0) {
                state.products.push({ ...action.payload, count: 1 })
            } else {
                MyProduct[0].count += 1
                
            }
            const totalPrice = state.products.reduce((total, curVal) => {
                return total + (curVal.price * curVal.count);
            }, 0);
            
            state.total = totalPrice.toFixed(2)
        },
        increaseBasketItemCount: (state, action) => {
            const MyProduct = state.products.filter(x => x._id === action.payload)
            state.quantity += 1;
            MyProduct[0].count += 1
            const totalPrice = state.products.reduce((total, curVal) => {
                return total + (curVal.price * curVal.count);
            }, 0);
            state.total = totalPrice.toFixed(2)
        },
        decrementBasketItemCount: (state, action) => {
            const MyProduct = state.products.filter(x => x._id === action.payload)
            if (MyProduct[0].count > 1) {
                state.quantity -= 1;
                MyProduct[0].count -= 1


            } else {
                state.products = state.products.filter(x => x._id !== action.payload)
                state.quantity -= 1;
            }
            const totalPrice = state.products.reduce((total, curVal) => {
                return total + (curVal.price * curVal.count);
            }, 0);
            state.total = totalPrice.toFixed(2)
        },
        setAll : (state,action) =>{
            console.log(action.payload)
            state.products  = action.payload
        }
    },
    
})

export const { addProduct, increaseBasketItemCount, decrementBasketItemCount , setAll } = cartSlice.actions;
export default cartSlice.reducer;