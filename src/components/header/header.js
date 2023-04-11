import React from 'react'
import logo from './logoimage.png'
import searchbtn from './searchbutton.png';
import userIcon from './userIcon.png';
import shopIcon from './shopIcon.png';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Header() {
    const navigation = useNavigate();
  return (
    <div className='header'>
        <ul className='headerUL'>
            <Link to={'/'}>
                <img className='logo' src={logo} alt='logo'></img>
            </Link>
            <li>
                <div className='searchBar'>
                <input className='searchbarinsert text-white' type="text"></input>
                <div className=''>
                    <img className='searchbtn headerIcons p-1' src={searchbtn} alt='logo'></img>
                </div>
                
                </div>
            </li>
            <li>
                HOME
            </li>
            <li>
                <div class="dropdown" style={{zIndex:"5"}}>
                <button class="dropbtn">SHOP</button>
                <div class="dropdown-content">
                    <div className='bg-primary p-3 h6' onClick={()=>navigation('/celebration_Cake')}>CAKES</div>
                    <div className='bg-primary p-3 h6' onClick={()=>navigation('/celebration_Cake')}>CELEBRATION</div>
                    <div className='bg-primary p-3 h6' onClick={()=>navigation('/celebration_Cake')}>DESSERTS</div>
                </div>
                </div>
            </li>
            <li>
                ABOUT
            </li>
            <li>
                CONTACT
            </li>
            <li>
            {JSON.parse(sessionStorage.getItem("user"))?.userToken?
            <Dropdown className='col-12' options={[{value:"logOut",label:<div className='btn btn-primary'>LOG OUT</div>}]} onChange={(item)=>{if(item.value=="logOut"){
                sessionStorage.setItem("user",null)
                window.location.reload(false);
            }}} value={JSON.parse(sessionStorage.getItem("user")).first_name} />
            
            :
                <img onClick={()=>{navigation('/Login');}} className='userIcon' src={userIcon} alt='logo'></img>}
            </li>
            <li>
                <img className='headerIcons' src={shopIcon} alt='logo' onClick={()=>{navigation('/cart');}}></img>
            </li>
        </ul>
        
        

        
    </div>
  )
}

export default Header