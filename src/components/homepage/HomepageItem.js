import PropTypes from 'prop-types';
import './HomepageItem.css';
import company from '../../images/images (1).jpg';

const HomepageItem = ({ title }) => (
  <div className="container" data-testid="homepageitem">
    <div className="item">
      <img className="icon" src={company} alt="company" />
      <h1 className="title">{title}</h1>
    </div>
  </div>
);

HomepageItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomepageItem;
