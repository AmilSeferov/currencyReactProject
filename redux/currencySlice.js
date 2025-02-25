import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  data: [],
  isLoading: false,
  error: false,
}
export const fetchCurrency = createAsyncThunk("fetchCurrency", async () => {
  const data = await axios.get(
    " https://v6.exchangerate-api.com/v6/718e7bd4ae2faa46543bd7d9/latest/USD"
  );
  return data;
});
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCurrency.rejected, (state) => {
      state.isLoading = false
      state.error = true;
    });
  }
})

export const { } = currencySlice.actions

export default currencySlice.reducer