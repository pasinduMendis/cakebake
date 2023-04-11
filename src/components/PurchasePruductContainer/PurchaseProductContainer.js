import React, { useEffect, useState } from 'react';
import './PurchaseProductContainer.css';
import closebtn from './closebtn.png';
import insideImage from './cake1.png';
import axios from 'axios';
import CustomizedPanel from '../CustomizedPanel/CustomizedPanel';

function PurchaseProductContainer(props) {
    const [item,setItem]=useState({})
    const [loading,setloading]=useState(true)
    const [disCustomize,setDisCustomize]=useState(false)
    const [selectedCuz,setselectedCuz]=useState([])
    useEffect(() => {
        getCakesByID(props.id)
    }, [])

    useEffect(() => {
        if(props.purchaseItems){
            var alreadyData=props.purchaseItems
            alreadyData[props.keyIndex].customize=selectedCuz;
            alreadyData[props.keyIndex].total=parseInt(props.cakeData.price.replace(/\D/g, ""))*props.qty+parseInt(calcCustomizeTotal());
            props.setPurchaseItem(alreadyData)
            props.calcTotal()
        }
        
    }, [selectedCuz])
    
    const getCakesByID=async (id)=>{
        await axios.get("http://localhost:4000/design/"+id).then((res)=>{
         //console.log(res.data)
         setItem(res.data)
         setloading(false)
        })
     }

     const deleteItemIncart=async ()=>{
        console.log("try delete")
        await axios.delete("http://localhost:4000/cart/deleteCart/"+props.cartId+"?userToken="+JSON.parse(sessionStorage.getItem("user")).userToken).then((res)=>{
            console.log(res)
            if(res.data.msg==="successfully deleted."){
                var sessionUser=JSON.parse(sessionStorage.getItem("user"))
                sessionUser.cart=res.data.cart
                sessionStorage.setItem("user",JSON.stringify(sessionUser))
                window.location.reload(false)
              }
              else{
                window.alert(res.data.msg?res.data.msg:res.data)
              }
        })
     }
     const calcCustomizeTotal=()=>{
        if(selectedCuz.length>0){
            let priceArr = selectedCuz.map(a => parseInt(a.variation.price.replace(/\D/g, "")));
            //console.log(priceArr)
            return priceArr.reduce((a, b) => a + b, 0)
        }
        else{
            return 0;
        }
     }
     
  return (
   <>{loading?<></> : 
   disCustomize?<><CustomizedPanel
    variation={item.customize?item.customize:[]}
     setDisCustomize={(val)=>setDisCustomize(val)}
      cutomizeDataSet={(val)=>{setselectedCuz(val)}}
      /></>:
   <div className='listedItems '>
                <div className='closebtnContainer'>
                    <img src={closebtn} className="closebtn" onClick={()=>deleteItemIncart()}></img>
                </div>
            
                <div className='itemimage'>
                    <img src={(item.image && item.image.length>0)?item.image[0]:""} className='imageInside'></img>
                    <div className='productName'>
                        {item?.title}
                    </div>
                </div>
                <div className='price'>
                    {props.cakeData.price.replace(/\D/g, "")}
                </div>
                <div className='qtybtn px-5'>
                {props.qty}
                </div>
                <div className='pricetotal'>
                    {parseInt(props.cakeData.price.replace(/\D/g, ""))*props.qty+parseInt(calcCustomizeTotal())}
                </div>
                <div className='customizeBtndiv'>
                    <button className='cutomizbtn' onClick={()=>{setDisCustomize(true)}} type=''>Customize</button>
                </div>
 
                </div>}
                </>
  )
}

export default PurchaseProductContainer