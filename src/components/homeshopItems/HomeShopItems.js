import React from 'react'
import cakeImage from './cake1.png';
import shopbtn from './shopbtn.png';
import './HomeShopitems.css';
import { useNavigate } from "react-router-dom";

function HomeShopItems(props) {
  const router=useNavigate();
  return (
    <div  class="members border-2 rounded-md shadow-2xl duration-100 hover:scale-105"  onClick={()=>{router(`/${props.type}`)}} >
                
                <img src={props.image} class="catogoryImages"></img>
                <div className='cakeType text-green-700 font-semibold'>{props.type=="celebration_Cake"?"CELEBRATION CAKE":props.type=="cakes"?"CAKES":"DESSRTS"}</div>
        
                <div  class="memberD">
                    <p>Shop Now</p>
                    <img src={shopbtn}></img>
                </div>

            </div>
  )
}

export default HomeShopItems