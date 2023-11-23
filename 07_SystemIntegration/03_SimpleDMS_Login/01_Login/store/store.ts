import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import { useDispatch } from 'react-redux';
// seting redux-toolkit
export const store = configureStore({
  // reducer 나열함 : 여러개 나열할 수 있음, 현재는 1개
  reducer: {
    auth: authReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
