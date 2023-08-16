import { createSlice } from"@reduxjs/toolkit";
import { initialState } from "../initialState";
import { getCarsCatalogThunk } from "../Thunk/Thunk";



const fulfilledGetCarsCatalog = (state, {payload})=>{
state.cars = payload
}


const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: builder => {
        builder
    .addCase(getCarsCatalogThunk.fulfilled, fulfilledGetCarsCatalog)
}
})



export const carsReducer = carsSlice.reducer;