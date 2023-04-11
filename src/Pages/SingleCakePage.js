import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Header from '../components/header/header'
import SingleCake from '../components/SingleCake/SingleCake'
import UpperNotificationBar from '../components/UpperNoficiationBar/UpperNotificationBar'

function SingleCakePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
        <UpperNotificationBar></UpperNotificationBar>
        {/* <Header></Header> */}
        <SingleCake id={searchParams.get("id")}></SingleCake>
    </div>
  )
}

export default SingleCakePage