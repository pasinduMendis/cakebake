import React, { useState } from 'react';
import './Bill.css';
import regulations from './regulations.png'

function Bill({orderData,subTotal,onPay}) {
    const shipping=400
    const [user,setUser]=useState(JSON.parse(sessionStorage.getItem("user")))
    const  places=["Minuwangoda", "Ragama","Kandana","Dalugama","Katunayake","Wattala","Hendala","Kelaniya"
        ,"Kiribathgoda" ,"Dematagoda","Kadawatha","Seeduwa","Mulleriyawa","Peliyagoda","Kotikawatta","Kolonnawa","Negombo","Battaramulla","Kotte","Colombo"];
        function formatDate() {
            var d = new Date(),
                month = '' + (d.getMonth() + 1),
                day = '' + (d.getDate()+2),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [year, month, day].join('-');
        }
  
  
        return (
    <div className='billShipcontainer px-5 mx-5'>
        <div className='shippingContainer'>
            <p className='billtext'>Billing & Shipping</p>
            <input className='inputs' type="email" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}} placeholder='ashley@yahoo.com' ></input>
            <div className='namecontainer'>
                <input className='inputs sd mt-2' type="text" value={user.first_name} onChange={(e)=>{setUser({...user,first_name:e.target.value})}} placeholder='Ashley'></input>
                <input className='inputs sd mt-2' type="text" value={user.last_name} onChange={(e)=>{setUser({...user,last_name:e.target.value})}} placeholder='Murz'></input>
            </div>
            <input className='inputs mt-2' type="text" value={user.customer_address} placeholder='No.10,Kandy Road, Dalugama'></input>
            <select className='inputs mt-2' onChange={(e)=>{setUser({...user,city:e.target.value})}}  name="City" id="cities">
                {
                    places.map((e)=>{
                         return   <option value={e}>{e}</option>
                    })
                }
                
            </select>
            <input className='inputs mt-2' type="text" value={user.customer_contact} placeholder='0786070456'></input>
            <input className='inputs mt-2' type="text" onChange={(e)=>{setUser({...user,extra_num:e.target.value})}} placeholder='0112895656'></input>
            <div className='dategetter mt-2'>
                <p className='billtext'>Delivery Date</p>
                <input className='datetime' min={formatDate()} onChange={(e)=>{setUser({...user,dilivery_date:e.target.value})}} type="date"></input>
            </div>
            <p className="billtext mt-2">Additional Comments</p>
            <textarea onChange={(e)=>{setUser({...user,additional_comment:e.target.value})}} className='additionalInfo' placeholder='if you have any additional comments,let us know!'></textarea>
           
        </div>
        <div className='purchaseinfor'>
            <p className='billtext'>YOUR ORDER</p>
            <div className='containerpayments'>
                <div className='columnadder'>
                    <p className='totaltext'>Product</p>
                    <p className='totaltext'>Subtotal</p>
                </div>
                <div className='toppinsAdder'>
                    <p className='totaltext'>Subtotal</p>
                    <p className='pricetext'>{"Rs. "+subTotal+".00"}</p>
                </div>
                <div className='toppinsAdder'>
                    <p className='totaltext'>Shipping</p>
                    <p className='pricetext'>{"Rs. "+shipping+".00"}</p>
                </div>
                <div className='toppinsAdder'>
                    <p className='totaltext'>Total</p>
                    <p className='pricetext'>{"Rs. "+(shipping+subTotal)+".00"}</p>
                </div>
                <img className='regualtionIMg' src={regulations}></img>
                <button className='paybtn' type='button' onClick={()=>{onPay({
                    email:user.email,
                    name:user.first_name+" "+user.last_name,
                    address:user.customer_address,
                    city:user.city,
                    contact: user.customer_contact+"/"+user.extra_num,
                    dilivery_date:user.dilivery_date,
                    additional_comment:user.additional_comment
                })}}>Pay Now</button>
            </div>

        </div>
    </div>
  )
}

export default Bill;