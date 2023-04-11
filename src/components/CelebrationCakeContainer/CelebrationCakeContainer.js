import React, { useEffect, useState } from 'react'
import './CelebrationCakeContainer.css';
import CakeItem from '../cakeItem/CakeItem';
import axios from "axios"

function CelebrationCakeContainer() {
    const [cakeList,setCakeList]=useState([])
    
    useEffect(() => {
        getCakes()
    }, [])

    const getCakes=async ()=>{
       await axios.get("http://localhost:4000/design/category/Celebration_Cake").then((res)=>{
        console.log(res.data)
        setCakeList(res.data=="failed"?[]:res.data)
       })
    }
    
  return (
    <div className='cakecontainer'>
        <div className='titleHeader'>
            Celebration Cake
        </div>
        <div className='cakeRaws'>
        {
           cakeList.length>0 && cakeList.map((e)=>{
                return <CakeItem item={e}></CakeItem>
            })
        }
        </div>
        
    </div>
  )
}

export default CelebrationCakeContainer