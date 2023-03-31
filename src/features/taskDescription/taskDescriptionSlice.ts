import { createSlice } from "@reduxjs/toolkit";

interface TaskDescriptionState {
    value: boolean;
}

const initialState: TaskDescriptionState = {
    value: false,
};

const taskDescriptionSlice = createSlice({
    name: "taskDescription",
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        }
    },
});

export const { toggle } = taskDescriptionSlice.actions;
export default taskDescriptionSlice.reducer;
