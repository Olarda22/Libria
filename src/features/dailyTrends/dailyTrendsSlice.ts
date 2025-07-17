import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Book, Work } from '../../types/book';

interface SearchState {
  results: Work[];
}

const initialState: SearchState = { results: [] };

const dailyTrandsSlice = createSlice({
  name: 'dailyTrands',
  initialState,
  reducers: {
    setResults(state, action: PayloadAction<Book[]>) {
      state.results = action.payload;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const { setResults, clearResults } = dailyTrandsSlice.actions;
export default dailyTrandsSlice.reducer;
