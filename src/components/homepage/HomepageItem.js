import React from 'react';
import PropTypes from 'prop-types';
import company from '../../images/images (1).jpg';

const HomepageItem = (props) => {
  const { title } = props;
  HomepageItem.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="container" data-testid="homepageitem">
      <div className="item">
        <img className="icon" src={company} alt="company" />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default HomepageItem;
