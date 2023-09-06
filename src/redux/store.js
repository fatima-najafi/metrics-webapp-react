// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import companiesReducer from './companySlice';

// const store = configureStore({
//   reducer: {
//     companies: companiesReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import companiesReducer from './companySlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
