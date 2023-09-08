import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_COMPANIES = 'companies/getCompanies';
const GET_COMPANY_DETAILS = 'companies/getCompanyDetails';

const initialState = {
  companyList: [],
  companyDetails: {},
  status: 'idle',
  error: null,
};

export const getCompanies = createAsyncThunk(GET_COMPANIES, async () => {
  const response = await fetch('https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=e8c5269540f0f24945cd7ad833f13bfe');
  const data = await response.json();
  return data;
});

export const getCompanyDetails = createAsyncThunk(
  GET_COMPANY_DETAILS,
  async (symbol) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=e8c5269540f0f24945cd7ad833f13bfe`,
    );
    const data = await response.json();
    return data[0];
  },
);

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.companyList = action.payload;
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getCompanyDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCompanyDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.companyDetails = action.payload;
      })
      .addCase(getCompanyDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default companySlice.reducer;
