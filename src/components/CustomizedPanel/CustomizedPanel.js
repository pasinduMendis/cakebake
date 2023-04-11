import React, { useState } from 'react';
import './CustomizedPanel.css';
import closebtn from './closebtn.png';
import CustomizedPanelMap from './mapCutomize';

function CustomizedPanel({setDisCustomize,variation,cutomizeDataSet},props) {
   // console.log("variation :",variation)
    const [cutomize,setCutomize]=useState([])
   
    const clickDone=()=>{
    //console.log(cutomize)
    cutomizeDataSet(cutomize)
    setDisCustomize(false)
 }
  return (
    <div className='mainContainerCust'>
        <div className='customizedslide'>
            <div className='textNames mt-3'>
                <p className='h4 text-light'>Customize Your Cake</p>
                <img src={closebtn} className='closebnt' onClick={()=>{setDisCustomize(false)}}></img>
            </div>
            <CustomizedPanelMap variationAvailabele={variation} setCutomizedata={(val)=>setCutomize(val)}/>
           
            <button className='donebtn mt-4' type='button' onClick={()=>clickDone()}>Done</button>
        </div>
    </div>
  )
}

export default CustomizedPanel