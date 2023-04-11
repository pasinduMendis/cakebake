import React from 'react';
import './CakeItem.css';
import cakeimage from './cake1.png';
import { useNavigate } from "react-router-dom";

function CakeItem(props) {
  const router=useNavigate();

  const getMinAndMaxPrice=(myArray)=>{
    var lowest = Number.POSITIVE_INFINITY;
var highest = Number.NEGATIVE_INFINITY;
var tmp;
for (var i=myArray.length-1; i>=0; i--) {
    tmp = myArray[i].price.split("Rs")[1];
    if (tmp < lowest) lowest = tmp;
    if (tmp > highest) highest = tmp;
}
return {min:lowest,max:highest}
  }
  return (
    <div className='cakeitem' onClick={()=>{router(`/Single_Cake/?id=${props.item.design_id}`)}}>
            <img className='cakeItemIMG' src={props.item.image[0]}></img>
            <div className='cakeItemDetails'>
                <h4 className='cakedd'>{props.item.title}</h4>
                <h5 className='cakedd'>{`${getMinAndMaxPrice(props.item.variation).min}-${getMinAndMaxPrice(props.item.variation).max}`}</h5>

                
            </div>
        </div>
  )
}

export default CakeItem