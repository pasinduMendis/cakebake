import React, { useEffect, useState } from 'react'
import './SingleCake.css';
import cakeImage from './cake1.png';
import axios from "axios"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function SingleCake({id}) {
  const [item,setItem]=useState({})
  const [selectItem,setSelectItem]=useState({})
  const [qty,setQty]=useState(1)
  const [msg, setMsg] = useState("")
     
  useEffect(() => {
    getCakesByID()
}, [])

const getCakesByID=async ()=>{
   await axios.get("http://localhost:4000/design/"+id).then((res)=>{
    //console.log(res.data)
    setItem(res.data)
   })
}

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

const addToCart=async ()=>{
  console.log(selectItem)
  if(!selectItem?.size){
    setMsg("cart added failed.please select size.")
  }
  else{
  var cartBody={
    design_id:id,
    size:selectItem,
    customize:[],
    qty:qty
  }

   await axios.post("http://localhost:4000/cart/addCart?userToken="+JSON.parse(sessionStorage.getItem("user")).userToken,cartBody).then((res)=>{
    console.log(res.data)
    setMsg(res.data.msg)
    if(res.data.msg==="successfully added."){
      var sessionUser=JSON.parse(sessionStorage.getItem("user"))
      sessionUser.cart=res.data.cart
      sessionStorage.setItem("user",JSON.stringify(sessionUser))
    }
   })
  }
}
  return (
    <div className='cakeMaker'>
        {/* <img className='singleCakeImg' src={item.image[0]}></img> */}
        <Carousel className='singleCakeImg'>
                {item.image  && item.image.map((img,key)=>{
                  return <div>
                <img src={img} key={key}></img>
                </div>})}
                
                
            </Carousel>
        <div className='cakeDetails' >
            <div className='cakedesc'>
            <h1 className='mt-3' style={{fontWeight:"bold",fontSize:"36px"}}>{item.name}</h1>
            <h3 className='mt-3 h2'>{item.title?item.title:""}</h3>
            <h3 className='mt-3 h3'>{selectItem.price?selectItem.price:`${getMinAndMaxPrice(item.variation?item.variation:[]).min}-${getMinAndMaxPrice(item.variation?item.variation:[]).max}`}</h3>
            
            <p className='mt-3' style={{fontFamily:"Open Sans",fontSize:"20px"}}>{item.description}</p>
            <Dropdown className='mt-3 col-4' options={item.variation?item.variation.map((item)=>{
              return {value:item,label:item.size}
            }):[]} onChange={(item)=>{setSelectItem(item.value)}} value="size" placeholder="Select an option" />
            <div className="form-outline col-3 h5 mt-3">
            <label className="form-label" for="typeNumber">QTY</label>
    <input type="number" min="1" value={qty} onChange={(e)=>{setQty(e.target.value)}} className="form-control" />
    
</div>
            </div>
            <div className='col-12 row d-flex justify-content-end'>
            <div className='col-6 row'>
                <div className='col-7 bg-dark px-4 py-3 text-light mx-3' type='' onClick={()=>{addToCart()}}>ADD TO CART</div>
                <div className='col-3 d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></div>
<p className="text-danger">{msg}</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default SingleCake