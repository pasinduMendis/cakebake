import React from 'react'
// import PersonIcon from '@mui/icons-material/Person';
// import { Button } from '@mui/material';
 import { Icon } from '@iconify/react';

function DashboardCard({
    icon = 'an icon',
    seemorelink,
    button = "Button Name",
    value = 0,
    title = "Title",
    bg
}) {
  return (
    
        <div className={` xl:w-1/3 lg:w-1/3 sm:w-full rounded p-1 m-1 shadow ${bg}`}>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <div className=' bg-transparent rounded-sm p-4'>
                            <div className=' text-center p-1 bg-white text-xl'>{value}</div>
                        </div>
                        <div className=' text-center text-white text-lg'>{title}</div>
                    </div>
                    <div className=' text-center flex justify-center'><Icon icon={icon} color="white" width="80" height="80" /></div>
                </div>
                {/* <div className=' text-center text-white'><Button >{button}</Button></div> */}
            </div>
  )
}

export default DashboardCard