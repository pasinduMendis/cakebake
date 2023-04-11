import React from 'react';
import { useNavigate } from 'react-router';
import './BestSellItem.css';
import sellingImg from './cake1.png';

function BestSellItem(props) {
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
    <div className='sellItems p-1 shadow-2xl duration-100 hover:scale-105' onClick={()=>{router(`/Single_Cake/?id=${props.caketype.design_id}`)}}>
        <img className='bestItem' src={props.caketype.image[0]}></img>
                <div className='bestItemDataContainer'>
                    <h3 className='h5 mt-2'>{props.caketype.title}</h3>
                    <h3 className='h5 mt-2 text-primary'>{`Rs: ${getMinAndMaxPrice(props.caketype.variation?props.caketype.variation:[]).min}-${getMinAndMaxPrice(props.caketype.variation?props.caketype.variation:[]).max}`}</h3>
                </div>
    </div>
  )
}

export default BestSellItem