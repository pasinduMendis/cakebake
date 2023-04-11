import React from 'react'
import './HomeFrontView.css';
import frontImage from './cake1.png';

function HomeFrontView() {
  return (
    <div className='mainHomeContainer'>
        <div className='happyCustomerCount'>
          {1000} Happy Customers !!
        </div>
        <div className='frontimage'>
            <div className='imagedesc text-justify'>
              <p className='desc '>
              Cake is a flour confection made from flour, sugar, and other ingredients, 
              and is usually baked. In their oldest forms, cakes were modifications of bread, 
              but cakes now cover a wide range of preparations that can be simple or elaborate, 
              and which share features with desserts such as pastries, meringues, custards, and pies.
              The most common ingredients include flour, sugar, eggs, fat (such as butter, oil or margarine),
              a liquid, and a leavening agent, such as baking soda or baking powder.
              Cake is often served as a celebratory dish on ceremonial occasions, such as weddings, anniversaries, and birthdays. 
              </p>
              <button className='seeMoreBtn font-normal duration-150 hover:translate-x-2 shadow-2xl focus-within:bg-dark-blue' type=''>See more </button>
            </div>
            <div className='imageContainer'>
            <img className='imageContainerImage' src={frontImage} alt='logo'></img>
            </div>
        </div>
    </div>
  )
}

export default HomeFrontView