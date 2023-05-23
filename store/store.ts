import { configureStore } from "@reduxjs/toolkit";
import UtilsReducer from "./reducers/securityReducer";
import recordsReducer from "./reducers/recordsReducer";
import operationsReducer from "./reducers/operationsReducer ";

export const store = configureStore({
  reducer: {
    UtilsReducer,
    recordsReducer,
    operationsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
