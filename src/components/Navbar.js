import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>     
      <nav className="navbar">
        <div className="navbar-container"> 
          <Link to="/" className="navbar-logo"> 
            twinkle mehta 
          </Link> 
          <div className='menu-icon' onClick={handleClick}>
            <Link to="/my-journey"> 
              <i className='fas fa-history'/>
            </Link> 
            <> </>
            <Link to="/community"> 
              <i className='fas fa-hand-holding-heart'/>
            </Link> 
          </div>
        </div> 
      </nav>
    </> 
  )
}

export default Navbar
