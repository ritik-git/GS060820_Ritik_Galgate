import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import skusData from "../assets/skus.json";
import { Sku } from "../interfaces/SKU";


interface SkuState {
  skus: Sku[];
}

const initialState: SkuState = {
  skus: skusData
  // skus: [],
};

const skuSlice = createSlice({
  name: "sku",
  initialState,
  reducers: {
    addSku: (state, action: PayloadAction<Sku>) => {
      state.skus.push(action.payload);
    },
    removeSku: (state, action: PayloadAction<string>) => {
      state.skus = state.skus.filter(sku => sku.ID !== action.payload);
    },
    updateSku: (state, action: PayloadAction<Sku>) => {
      const index = state.skus.findIndex(sku => sku.ID === action.payload.ID);
      if (index !== -1) {
        state.skus[index] = action.payload;
      }
    }
  }
});

export const { addSku, removeSku, updateSku } = skuSlice.actions;
export default skuSlice.reducer;