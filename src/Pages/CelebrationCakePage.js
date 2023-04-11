import React from 'react'
import CelebrationCakeContainer from '../components/CelebrationCakeContainer/CelebrationCakeContainer'
import Header from '../components/header/header'
import UpperNotificationBar from '../components/UpperNoficiationBar/UpperNotificationBar'

function CelebrationCakePage() {
  return (
    <div>
        <UpperNotificationBar></UpperNotificationBar>
        {/* <Header></Header> */}
        <CelebrationCakeContainer></CelebrationCakeContainer>

    </div>
  )
}

export default CelebrationCakePage