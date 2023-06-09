import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlProducts } from "../../api/ApiUrl";
const sliceName = 'productsSlice';


export const fetchProducts = createAsyncThunk(`${sliceName}/fetchProducts`, async () => {
    const res = await fetch(urlProducts);
    const data = await res.json();
    console.log(data);
    return data;
})


const productsSlice = createSlice({
    name: sliceName,
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        // builder.addCase(fetchProducts.pending, (state, action) => {
        //     return state = action.payload;
        // })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state = action.payload;
            console.log(state);
            return state;
        })
        // builder.addCase(fetchProducts.rejected, (state, action) => {
        //     state = console.error(action.payload);;
        //     return state;
        // })
    }
})

export const productsReducer = productsSlice.reducer;