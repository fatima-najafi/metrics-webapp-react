import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import back from '../images/back.png';
import mic from '../images/mic.png';
import setting from '../images/setting.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="navigation" style={{ display: 'flex', gap: '20px' }}>
      <div
        role="button"
        tabIndex={0}
        key={uuidv4()}
        onClick={handleButtonClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleButtonClick();
          }
        }}
      >
        <img
          className="btn-back"
          alt="back"
          src={back}
          style={{ backgroundColor: 'black' }}
        />
      </div>
      <h2 className="heading">Companies Webpage</h2>
      <div className="position">
        <img
          src={mic}
          alt="microphone"
          className="btn"
          style={{ backgroundColor: 'red' }}
        />
        <img
          src={setting}
          alt="setting"
          className="btn"
          style={{ backgroundColor: 'green' }}
        />
      </div>
    </div>
  );
};

export default Navbar;
