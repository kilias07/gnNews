import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleCounterState {
  value: number;
}

const initialState: ArticleCounterState = {
  value: 0,
};

const articleCounterSlice = createSlice({
  name: "articleCounter",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ArticleCounterState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = articleCounterSlice.actions;
export default articleCounterSlice.reducer;
