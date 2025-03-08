import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
}

const initialState: AuthState = {
  email: localStorage.getItem("auth"), // Initialize from localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      localStorage.setItem("auth", action.payload);
    },
    logout: (state) => {
      state.email = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
