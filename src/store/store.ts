import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/bookSearch/searchSlice';
import dailyReducer from '../features/dailyTrends/dailyTrendsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dailyTrends: dailyReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
