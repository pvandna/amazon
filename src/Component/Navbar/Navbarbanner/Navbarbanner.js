import React from 'react';
import './navbarbanner.css';
import {Link } from 'react-router-dom';

function Navbarbanner() {
  return (
    <div className='navbarbanner'>
      <div className='navbarbanner-left'>
        <ul>
          <li ><Link><i class="fa-solid fa-bars"></i>All </Link></li>
        
          <li ><Link to="/products">Fresh</Link><i class="fa-solid fa-caret-down" style={{marginLeft:"5px"}}></i></li>
          <li ><Link to="/products">Amazone minit</Link></li>
          <li ><Link to="/products">Sell</Link></li>
          <li ><Link to="/products">Best seller</Link></li>
          <li ><Link to="/">Today's deals</Link></li>
          <li ><Link to="/">Mobiles</Link></li>
          <li ><Link to="/products">Electronics</Link></li>
          <li ><Link to="/">Prime</Link><i class="fa-solid fa-caret-down" style={{marginLeft:"5px"}}></i></li>
          <li ><Link to="/products">Custom Services</Link></li>
          <li ><Link to="/products">Fashion</Link></li>
          <li ><Link to="/products">Home&Kitchen</Link></li>

        </ul>
      </div>
      <div className='navbarbanner-right'>
        <img src=' https://m.media-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_P3_SWM_ShopNow._CB545049405_.jpg ' />

      </div>


    </div>
  )
}

export default Navbarbanner