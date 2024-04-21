import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './screens/homePage/HomePageSlice';
import ReduxLogger from 'redux-logger';

export const store = configureStore({
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxLogger),
  reducer: {
    homePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
