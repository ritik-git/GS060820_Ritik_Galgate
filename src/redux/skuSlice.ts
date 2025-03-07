import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SKU } from "../interfaces/SKU";

interface SKUState {
  skus: SKU[];
}

const initialState: SKUState = {
  skus: [],
};

const skuSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    addSKU: (state, action: PayloadAction<SKU>) => {
      state.skus.push(action.payload);
    },
    removeSKU: (state, action: PayloadAction<string>) => {
      state.skus = state.skus.filter(sku => sku.id !== action.payload);
    },
  },
});

export const { addSKU, removeSKU } = skuSlice.actions;
export default skuSlice.reducer;
