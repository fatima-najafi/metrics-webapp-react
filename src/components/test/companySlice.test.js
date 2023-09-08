import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  getCompanies,
  getCompanyDetails,
} from '../../redux/companySlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('companySlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      companyList: [],
      companyDetails: {},
      status: 'idle',
      error: null,
    });
  });

  it('should fetch companies successfully', async () => {
    const fakeData = [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }];
    const fakeResponse = { json: () => Promise.resolve(fakeData) };
    global.fetch = jest.fn().mockResolvedValue(fakeResponse);

    await store.dispatch(getCompanies());

    const actions = store.getActions();
    expect(actions[0].type).toBe(getCompanies.pending.type);
    expect(actions[1].type).toBe(getCompanies.fulfilled.type);
    expect(actions[1].payload).toEqual(fakeData);
  });

  it('should fetch company details successfully', async () => {
    const fakeData = { id: 1, name: 'Company A' };
    const fakeResponse = { json: () => Promise.resolve([fakeData]) };
    global.fetch = jest.fn().mockResolvedValue(fakeResponse);

    await store.dispatch(getCompanyDetails('AAPL'));

    const actions = store.getActions();
    expect(actions[0].type).toBe(getCompanyDetails.pending.type);
    expect(actions[1].type).toBe(getCompanyDetails.fulfilled.type);
    expect(actions[1].payload).toEqual(fakeData);
  });
});
