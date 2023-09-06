import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from '../../redux/companySlice';
import HomepageItem from './HomepageItem';
import './HomepageList.css';

const HomepageList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { companyList, status, error } = useSelector(
    (state) => state.companies,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const filteredCompanies = Array.isArray(companyList)
    ? companyList.filter((company) => company.symbol.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="context">
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Company"
          value={search}
        />
      </div>

      <div className="container">
        {filteredCompanies.map((company) => (
          <div
            key={uuidv4()}
            onClick={() => navigate(`/details/${company.symbol}`)}
            aria-hidden="true"
          >
            <HomepageItem title={company.symbol} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageList;
