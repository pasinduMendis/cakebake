import React from 'react'
import BarChart from '../components/BarChart'
import ColumnChart from '../components/ColumnChart'
import PieChart from '../components/PieChart'
// import DashboardCard from '../components/DashboardCard'

const Dashboard = () => {
  return (
    <div>
       
        <div className='xl:grid xl:grid-cols-3 xl:gap-2 lg:grid lg:grid-cols-3 lg:gap-2 sm:grid sm:grid-cols-1 sm:gap-0 m-2 rounded-lg bg-dark-blue p-2'>
            <BarChart series01='Expenses' series02='Sales' series01_Data={[95.5,90,88.8,88.7,88.9,85]} series02_Data={[50,75.5,80,85,86.4, 88.23]} />
                    <PieChart title='Customer Persentage in Gender Wise ' data={[10 , 13]} />
                <ColumnChart title='Monthly Sales' />
                <ColumnChart />
                <BarChart />
                <PieChart />
        </div>
    </div>
  )
}

export default Dashboard