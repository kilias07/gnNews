import { createSlice } from "@reduxjs/toolkit";

interface LayouterState {
  value: "grid" | "list";
}

const initialState: LayouterState = {
  value: "grid",
};

const layouterSlice = createSlice({
  name: "layouter",
  initialState,
  reducers: {
    setLayouter: (state) => {
      state.value = state.value === "grid" ? "list" : "grid";
    },
  },
});

export const { setLayouter } = layouterSlice.actions;
export default layouterSlice.reducer;
