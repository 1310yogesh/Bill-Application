import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    amount: 229.32
}

const totalAmountSlice = createSlice({
    name: "totalAmount",
    initialState,
    reducers: {
        updateTotalAmount: (state,action) => {
            state.amount = action.payload;
        }
    }
});

export const { updateTotalAmount } = totalAmountSlice.actions;
export default totalAmountSlice.reducer;
