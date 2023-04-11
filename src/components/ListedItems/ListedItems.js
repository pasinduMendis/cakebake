import React, { useEffect, useState } from 'react';
import PurchaseProductContainer from '../PurchasePruductContainer/PurchaseProductContainer';
import './ListedItems.css';
import gloden from './Golden.jpg';
import raspberry from './raspberry.jpg';
import freshfruit from './freshfruit.webp';
import axios from 'axios';
import Bill from '../Bill/Bill';


function ListedItems() {
    const [purchaseItems,setPurchaseItem]=useState(JSON.parse(sessionStorage.getItem("user"))?.cart?JSON.parse(sessionStorage.getItem("user")).cart:[])
    const [total,setTotal]=useState(0)
    const [msg,setMsg]=useState("")
    const [dispBill,setDispBill]=useState(false)
    
    const cartItems=JSON.parse(sessionStorage.getItem("user"))?.cart?JSON.parse(sessionStorage.getItem("user")).cart:[];
  
  const purcahse2=async (val)=>{
    console.log(purchaseItems)
    await axios.post("http://localhost:4000/order/add?token="+JSON.parse(sessionStorage.getItem("user")).userToken,{order:[purchaseItems],customer:JSON.parse(sessionStorage.getItem("user")).customer_id,shipping_data:val}).then((res)=>{
         console.log(res.data)
         setMsg(res.data)
        
         if(res.data=="successfully added"){
            setDispBill(false)
            window.alert(res.data)
         }

        })
  }

  const purcahse=async ()=>{
    console.log(purchaseItems)
    setDispBill(true)
  }

  const calcTotal=()=>{
    if(purchaseItems.length>0){
        let priceArr = purchaseItems.map(a => parseInt(a.total));
        //console.log("totalArr:",priceArr)
        setTotal(priceArr.reduce((a, b) => a + b, 0))
    }
 }

 useEffect(() => {
    //console.log("change")
    calcTotal() 
}, [purchaseItems])


    return (
    <>
    {dispBill?<Bill orderData={purchaseItems} subTotal={total} onPay={(val)=>purcahse2(val)}/>:<div className='itemContainer'>
        <div className='columnNames'>
            <div className='productTitle'>Product</div>
            <div className='productprice'>Price</div>
            <div className='productQty'>Qty</div>
            <div className='productsubtotal'>SubTotal</div>
        </div>
        <div className='itemList'>
            {
                cartItems.length>0 && cartItems.map((e,key)=>{
                    return <PurchaseProductContainer id={e.design_id} cakeData={e.size} qty={e.qty} cartId={e._id} setPurchaseItem={(val)=>setPurchaseItem(val)} purchaseItems={purchaseItems} key={key} keyIndex={key} calcTotal={()=>calcTotal()}></PurchaseProductContainer>
                })
            }
            
        </div>
        <div className='totalViewer'>
            <div className='subtotal'>Total: {total}</div>
            
        </div>
            <div className='purchasebtnContainer'>
                <button type='' className='purchasebtn' onClick={()=>{purcahse()}}>Purchase</button>
                
            </div>
        </div>}
        </>
    
        
  )
}

export default ListedItems