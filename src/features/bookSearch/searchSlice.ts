import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Book } from '../../types/book';

interface SearchState {
  results: Book[];
}

const initialState: SearchState = { results: [] };

const searchSlice = createSlice({
  name: 'search',
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

export const { setResults, clearResults } = searchSlice.actions;
export default searchSlice.reducer;
