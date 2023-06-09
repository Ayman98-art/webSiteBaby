import { createSlice } from "@reduxjs/toolkit";

const SliceName = 'CartsSlice'

const CartsSlice = createSlice({
    name:SliceName,
    initialState: [],
    reducers:{
        addToCart(state, action){
            const product = state.find((product)=>product.id === action.payload.id)
            if (product) {
                product.qt += 1;
            }else { 
                const newProduct = {...action.payload, qt:1}
                state.push(newProduct);
            }

        },
        removeFromCart(state, action){
            return state.filter((product)=>product.id !== action.payload.id)
        },
        increaseProduct(state, action){
            const product = state.find((product)=>product.id === action.payload.id)
            if (product.qt === product.stock) {
                product.qt = product.stock;
            }else{
                product.qt += 1;
            }
        },
        decreaseProduct(state, action){
            const product = state.find((product)=>product.id === action.payload.id)
            if (product.qt !== 1) {
                product.qt -= 1;
            }
        },

        clearCart(){
            return [];
        }
    },
})

export const {addToCart, removeFromCart, clearCart, increaseProduct, decreaseProduct} = CartsSlice.actions;
export const CartsReducer = CartsSlice.reducer;