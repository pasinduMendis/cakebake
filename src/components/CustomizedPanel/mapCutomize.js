import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CustomizedPanel.css';

function CustomizedPanelMap({data,variationAvailabele,setCutomizedata}) {
    const [item,setItem]=useState([])
    const [cutomize,setCutomize]=useState([])
    useEffect(() => {
        //console.log("variationAvailabele :",variationAvailabele)
        getcutomize()
    }, [])
    
    const getcutomize=async (id)=>{
        await axios.get("http://localhost:4000/customize/getAllCustomize").then((res)=>{
         //console.log(res.data)
         setItem(res.data)

        })
     }
     
    return (
        <>
        {item.length>0 && item.map((customizeItem)=>{
            //console.log(customizeItem)
            
            const getIndex=variationAvailabele.findIndex(e => e.customize_id === customizeItem.customize_id)
            //console.log(getIndex)
            const availableOptions=(getIndex>-1 && variationAvailabele[getIndex].available_options && variationAvailabele[getIndex].available_options.length>0) ?variationAvailabele[getIndex].available_options:[]
            //console.log("variationAvailabele :",availableOptions)
            return <div className='toppingadder mt-4'>
        <p className='typename'>{customizeItem.title}</p>
        {customizeItem.variation&& customizeItem.variation.length>0 && customizeItem.variation.map((vari)=>{
            if(availableOptions.indexOf(vari.name) == -1){
                return <button id={vari.variation_id} className='overflow-hidden additionalbtns btn' disabled type='button'>{vari.name}</button>

            }else{
            return <button id={vari.variation_id} 
            className='additionalbtns btn border border-dark overflow-hidden' type='button'
            onClick={()=>{
                document.getElementById(vari.variation_id).style.background="blue"
                setCutomize([...cutomize,{customize_id:customizeItem.customize_id,variation:vari}])
                setCutomizedata([...cutomize,{customize_id:customizeItem.customize_id,variation:vari}])
            }}>{vari.name}</button>

            }
        })}
    </div>
        })}
        </>
        
        
    )
  }
  
  export default CustomizedPanelMap