import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BestSellItem from '../bestSellItem/BestSellItem';
import './Bestsellerslide.css';


function Bestsellerslide() {

    const [item,setItem]=useState([]);
    
    useEffect(() => {
      getAllItems()
    }, [])

    const getAllItems=async ()=>{
      await axios.get("http://localhost:4000/design/allDesign?token="+JSON.parse(sessionStorage.getItem("user")).userToken).then((res)=>{
        
      setItem(getMultipleRandom(res.data,4))
      })
    }
    function getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
    
      return shuffled.slice(0, num);
    }
    
  return (
    <div className='sellerContainer'>
        <div className='happyCustomerCount4 text-danger h2' >
          BUY NOW
        </div>
        <div className='itemsContainer'>
            {
                item.length>0 && item.map((e)=>{
                    return <BestSellItem caketype={e}></BestSellItem>
                }
                )
            }
        </div>
        
    </div>
  )
}

export default Bestsellerslide