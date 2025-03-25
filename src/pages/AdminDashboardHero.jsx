import React from 'react'
import Card from '../components/DetailsDashboardCards'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataLine, dataBar } from '../assets/ChartData'
import { Line, Bar } from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip} from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip);
import PieChartCard from '../components/PieChartCard'
import TransactionCard from '../components/Transactions'


function AdminDashboardHero() {
    const profitMargin = 10

  return (
    <div className='grow p-8 pt-25'>
        <h2 className='inline md:hidden text-2xl mb-4'>Dashboard</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 mt-5 gap-5 dark:text-gray-900'>
            <div className='col-span-1'>
                <Card  icon={<FaShoppingCart />} title='Orders' value="50" bgColor="bg-purple-default" iconBgColor="bg-gray-200" textColor="text-gray-200" description="orders of the week"/>
            </div>
            <div className='col-span-1 '>
                <Card  icon={<FaUsers />} title='Users' value="30" bgColor="bg-white dark:bg-dark-default" iconBgColor="bg-gray-200" textColor="dark:text-gray-200" description="Users within the week"/>
            </div>

            <div className='md:col-span-2 row-span-1 lg:row-span-2 bg-white dark:bg-dark-default dark:text-gray-300 py-5 px-4 rounded-4xl order-last md:order-none'>
                <div>
                    <h3 className='text-2xl font-bold'>Product Statistics</h3>
                    <p className='text-sm text-gray-700 dark:text-gray-100'> Track your Product Sales</p>
                </div>

                <div>
                    <PieChartCard />
                </div>

                <div  className='flex flex-row justify-around py-2'>
                    <div className='flex flex-row justify-between gap-5'>
                        <div>
                            <FaShoppingCart />
                        </div>
                        <h3>Item</h3>
                    </div>
                    <div className='flex flex-row justify-between gap-7'>
                    <h3>Price</h3>
                        <div className={`text-xs xl:text-sm text-black font-bold px-3 py-1 rounded-2xl ${profitMargin < 0 ? 'bg-warning-red' : 'bg-success-green'}`}>
                            {profitMargin < 0 ? (
                                <div>{profitMargin.toFixed(2)}% </div>
                            ) : (
                                <div>+ {profitMargin.toFixed(2)}% </div>
                            )}
                        </div>
                    </div>
                </div>
                <div  className='flex flex-row justify-around py-2'>
                    <div className='flex flex-row justify-between gap-5'>
                        <div>
                            <FaShoppingCart />
                        </div>
                        <h3>Item</h3>
                    </div>
                    <div className='flex flex-row justify-between gap-7'>
                    <h3>Price</h3>
                        <div className={`text-xs xl:text-sm text-black font-bold px-3 py-1 rounded-2xl ${profitMargin < 0 ? 'bg-warning-red' : 'bg-success-green'}`}>
                            {profitMargin < 0 ? (
                                <div>{profitMargin.toFixed(2)}% </div>
                            ) : (
                                <div>+ {profitMargin.toFixed(2)}% </div>
                            )}
                        </div>
                    </div>
                </div>
                <div  className='flex flex-row justify-around py-2'>
                    <div className='flex flex-row justify-between gap-5'>
                        <div>
                            <FaShoppingCart />
                        </div>
                        <h3>Item</h3>
                    </div>
                    <div className='flex flex-row justify-between gap-7'>
                    <h3>Price</h3>
                        <div className={`text-xs xl:text-sm text-black font-bold px-3 py-1 rounded-2xl ${profitMargin < 0 ? 'bg-warning-red' : 'bg-success-green'}`}>
                            {profitMargin < 0 ? (
                                <div>{profitMargin.toFixed(2)}% </div>
                            ) : (
                                <div>+ {profitMargin.toFixed(2)}% </div>
                            )}
                        </div>
                    </div>
                </div> 
            </div>

            <div className='col-span-1'>
                <Card  icon={<FaBox />} title='Products' value="1" bgColor="bg-white dark:bg-dark-default" iconBgColor="bg-gray-200" textColor="dark:text-gray-200" description="products sold within the week"/>
            </div>

            <div className='col-span-1'>
                <Card  icon={<FaCog />} title='Settings' value="11" bgColor="bg-white dark:bg-dark-default" iconBgColor="bg-gray-200" textColor="dark:text-gray-200" description="settings used in the month"/>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='bg-white p-4 rounded-2xl shadow-lg dark:bg-dark-default dark:text-white'>
                <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                <Line data={dataLine} />
            </div>
            <div className='bg-white p-4 rounded-2xl shadow-lg dark:bg-dark-default dark:text-white'>
                <h3 className='text-lg font-semibold mb-4'>Product Data</h3>
                <Bar data={dataBar} />
            </div>
        </div>

        <div className="my-20 bg-gray-100 dark:bg-dark-default flex items-center justify-center">
            <TransactionCard />
        </div>
    </div> 
  )
}

export default AdminDashboardHero