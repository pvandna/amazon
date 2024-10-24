import React from 'react';
import './Footer.css';
// import amazonelogo from '../../../Assets/amazon_logo.png';
import amazonelogo from '../../Assets/amazon_logo.png';

function Footer() {
  return (
    <div className='footer'>
      
        <div className='one'>
          <ul className='oneul'>
            <li className='bold'>Get To Know Us</li>
            <li>About Us </li>
            <li>Careers </li>
            <li>press Released </li>
            <li>Amazone science</li>


          </ul>

          <ul className='oneul'>
            <li className='bold'>Connect with us</li>
            <li>instagram</li>
            <li>Twiter</li>
            <li>Facebook</li>

          </ul>
          <ul className='oneul'>
            <li className='bold'>Make Money With US</li>
            <li>Sell On Amazone</li>
            <li>Sell under Amazone Accelerator</li>
            <li>Product and Build Youe Brand</li>
            <li>Amazone Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fullilment bt Amazone</li>
          </ul>

          <ul className='oneul'>
            <li className='bold'>Let Us Help You</li>
            <li>COVID-19 and Amazone</li>
            <li>Your Account</li>
            <li>Return Center</li>

          </ul>
      
      </div>

      <div className='logo'>
        <img src={amazonelogo} alt="logo" className='img' />


      </div>

    </div>
  )
}

export default Footer