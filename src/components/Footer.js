import { useState } from 'react';
import LoginPopup from './LoginPopup';
import '../App.css';

function Footer({ username, setUsername }) {
  const [showLogin, setShowLogin] = useState(false);

  const handleToggleLoginPopup = () => {
    setShowLogin(!showLogin);
  }

  return (
    <>
      <div className='footer'>
        {username === '' ?
          <>
            <div>'Not logged in.'</div>
            <button onClick={handleToggleLoginPopup}> Save answer? </button>
          </> :
          <>
            <div>'User:'</div>
            <button onClick={handleToggleLoginPopup}>{username}</button>
          </>
        }
      </div>
    </>
  );
}

export default Footer;