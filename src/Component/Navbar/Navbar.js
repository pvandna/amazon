import React from 'react';
import './Navbar.css'
import Navbarbelt from './Navbarbelt/Navbarbelt';
import Navbarbanner from './Navbarbanner/Navbarbanner';
import Footer from '../Footer/Footer';


function Navbar() {
  return (
    <div className='navbar'>
        <Navbarbelt/>
        <Navbarbanner/>
       
    </div>
  )
}

export default Navbar