// src/features/orderSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  quantity: number;
}

const initialState: OrderState = {
  quantity: 1,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = Math.max(1, action.payload);
    },
  },
});

export const { setQuantity } = orderSlice.actions;
export default orderSlice.reducer;
