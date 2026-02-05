
import React from 'react'
import V3 from'../../public/Image/V3.jpg'

import './Header.css'
import Nav from './Nav.jsx'
const Header = () => {
  return (
    <div class="header">
      
      <h1 >VEDA COLLEGE</h1>
<img src={V3} height="55" width="100"></img>
     <Nav />

    </div>
  )
}

export default Header
