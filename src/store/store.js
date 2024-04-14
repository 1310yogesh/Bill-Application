import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import billSlice from './slices/billSlice';
import totalAmountSlice from "./slices/totalAmountSlice";

export const store = configureStore({
  reducer: {
    customer: customerSlice,
    bill: billSlice,
    totalAmount: totalAmountSlice
  },
});
