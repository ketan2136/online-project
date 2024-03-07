import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
const Header = () => {


  const mobile = window.innerWidth <= 768 ? true : false;
  const [manuOpan, setManuOpan] = useState(false)

  return (
    <div className="header">
      <img src={logo} alt="" className='logo' />
      {(manuOpan === false && mobile === true) ? (
        <div 
        style={{
           background: 'var(--appColor)',
            padding: '0.5rem', 
            borderRadius: '5px'
           }}
        onClick={() => setManuOpan(true)}
        >
          <img src={bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className='header_manu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      )}

    </div>
  )
}

export default Header
