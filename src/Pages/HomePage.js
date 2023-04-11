import React from 'react'
import Bestsellerslide from '../components/bestSeller/Bestsellerslide'
import CustomerReviews from '../components/customerReviews/CustomerReviews'
import Footer from '../components/footer/Footer'
import Header from '../components/header/header'
import HomeFrontView from '../components/homeFrontView/HomeFrontView'
import HomeshopDisplay from '../components/homeshopDisplay/HomeshopDisplay'
import UpperNotificationBar from '../components/UpperNoficiationBar/UpperNotificationBar'

function HomePage() {
  //console.log(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div>
    <UpperNotificationBar></UpperNotificationBar>
      {/* <Header></Header> */}
      <HomeFrontView></HomeFrontView>
      <HomeshopDisplay></HomeshopDisplay>
      <CustomerReviews></CustomerReviews>
      <Bestsellerslide></Bestsellerslide>
      <Footer></Footer>
    </div>
  )
}

export default HomePage