import { configureStore } from "@reduxjs/toolkit";
import layouterReducer from "../features/layouter/layouterSlice";
import articleCounterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/news/newsApiSlice";
import taskDescriptionReducer from "../features/taskDescription/taskDescriptionSlice";


export const store = configureStore({
  reducer: {
    layouter: layouterReducer,
    articleCounter: articleCounterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    taskDescription: taskDescriptionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
