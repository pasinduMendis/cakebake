import React from 'react'
import "./Footer.css";
import logo from './logoimage.png'

function Footer() {
  return (
    <div className='footerContainer col-12 py-5 row '>
        <div className='col-4 d-flex justify-content-center'>
          <div className='text-start text-light h6'>
            <h3>CONTACT US</h3>
            <p>No:20, Kandy Road, Dalugama</p>
            <p>078696969</p>
            <p>bakedDelights@gmail.com</p>
            </div>
        </div>
        <div className='col-3 d-flex justify-content-center h6 text-light'>
            <h3>Copyright © 2022 BakedDelights.
All rights reserved.</h3>
            
        </div>
        <div className='col-4 d-flex justify-content-center'>
        <img className='logo' src={logo} alt='logo'></img>
        </div>
        <div className='map'></div>
    </div>
  )
}

export default Footer