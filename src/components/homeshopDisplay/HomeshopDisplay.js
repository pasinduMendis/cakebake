import React from 'react'
import HomeShopItems from '../homeshopItems/HomeShopItems';
import './HomeshopDisplay.css';


function HomeshopDisplay() {
    const types=["cakes","celebration_Cake","desserts"];
    const imageArr=["https://drivemehungry.com/wp-content/uploads/2022/09/fresh-fruit-cake-5-500x500.jpg","https://bakerbynature.com/wp-content/uploads/2022/04/Golden-Vanilla-Cake-with-Vanilla-Frosting0-19-500x500.jpg","https://www.happyfoodstube.com/wp-content/uploads/2018/08/raspberry-oreo-no-bake-dessert-image-500x500.jpg"]
  return (
    <div className='mainHomeContainer2'>
        <div className='happyCustomerCount2'>
          SHOP NOW
        </div>
        <div className='frontimage2'>
            {
            
            types.map((e,key)=>{
                return <HomeShopItems type={e} image={imageArr[key]}></HomeShopItems>
            })
            
            }
        </div>
    </div>
  )
}

export default HomeshopDisplay