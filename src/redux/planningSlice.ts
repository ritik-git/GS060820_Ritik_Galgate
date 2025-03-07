import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanningData } from "../interfaces/Planning";

interface PlanningState {
  data: PlanningData[];
}

const initialState: PlanningState = {
  data: [],
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    addPlanningData: (state, action: PayloadAction<PlanningData>) => {
      state.data.push(action.payload);
    },
  },
});

export const { addPlanningData } = planningSlice.actions;
export default planningSlice.reducer;
