import React, { useState, useEffect } from 'react'
import Card from '../components/DetailsDashboardCards'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataLine } from '../assets/ChartData'
import { Line, Bar } from 'react-chartjs-2'
import PieChartCard from '../components/PieChartCard'
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip);
import TransactionCard from '../components/Transactions'


function AdminDashboardHero() {
  const [stats, setStats] = useState({
    totalUsers: { count: 0, profitMargin: 0 },
    totalEmployees: { count: 0, profitMargin: 0 },
    totalCustomers: { count: 0, profitMargin: 0 },
    totalProducts: { count: 0, profitMargin: 0 },
  });
  const [products, setProducts] = useState([]);

  const [dataBar, setDataBar] = useState({
    labels: [],
    datasets: [
      {
        label: 'Stock Quantity',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  // Fetch data from backend API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/stats`, {
          headers: {
            Authorization: `bearer ${authToken}`,
          }
        });
        const data = await response.json();

        // Update state with fetched data
        setStats({
          totalUsers: data.totalUsers || { count: 0, profitMargin: 0 },
          totalEmployees: data.totalEmployees || { count: 0, profitMargin: 0 },
          totalCustomers: data.totalCustomers || { count: 0, profitMargin: 0 },
          totalProducts: data.totalProducts || { count: 0, profitMargin: 0 },
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStats();
  }, []);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/products`, {
          headers: {
            Authorization: `bearer ${authToken}`,
          }
        }); // Replace with your actual API endpoint
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

   // Fetch data from API and update chart data
   useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/products`, {
          headers: {
            Authorization: `bearer ${authToken}`,
          }
        }); // Replace with your API endpoint
        const result = await response.json();

        // Extract product names and stock quantities
        const labels = result.map((product) => product.name);
        const stockData = result.map((product) => product.stock);

        // Colors for the bar chart
        const backgroundColor = result.map((_, index) =>
          index % 2 === 0 ? 'rgba(54, 162, 235, 0.7)' : 'rgba(255, 206, 86, 0.7)'
        );
        const borderColor = result.map((_, index) =>
          index % 2 === 0 ? 'rgba(54, 162, 235, 0.7)' : 'rgba(255, 206, 86, 0.7)'
        );

        // Update the dataBar state with dynamic data
        setDataBar({
          labels: labels,
          datasets: [
            {
              label: 'Stock Quantity',
              data: stockData,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='grow p-8 pt-25'>
      <h2 className='inline md:hidden text-2xl mb-4'>Dashboard</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 mt-5 gap-5 dark:text-gray-900'>
        <div className='col-span-1'>
          <Card icon={<FaShoppingCart />} title='Products' value={stats.totalProducts.count} bgColor="bg-purple-default" iconBgColor="bg-gray-200" textColor="text-gray-200" description="All Products" profitMargin={stats.totalProducts.profitMargin} />
        </div>
        <div className='col-span-1 '>
          <Card icon={<FaUsers />} title='Users' value={stats.totalUsers.count} bgColor="bg-white dark:bg-dark-default" iconBgColor="bg-gray-200" textColor="dark:text-gray-200" description="All users of the platform" profitMargin={stats.totalUsers.profitMargin} />
        </div>

        <div className='md:col-span-2 row-span-1 lg:row-span-2 bg-white dark:bg-dark-default dark:text-gray-300 py-5 px-4 rounded-4xl order-last md:order-none'>
          <div>
            <div>
              <h3 className='text-2xl font-bold'>Product Statistics</h3>
              <p className='text-sm text-gray-700 dark:text-gray-100'> Track your Product Sales</p>
            </div>

            <div>
              <PieChartCard />
            </div>

            <div>
              {products.slice(0,3).map((product) => (
                <div className='flex flex-row justify-around py-2' key={product._id}>
                  <div className='flex flex-row justify-between gap-5'>
                    <div>
                      <FaShoppingCart />
                    </div>
                    <h3>{product.name}</h3>
                  </div>
                  <div className='flex flex-row justify-start gap-7'>
                    <h3>{product.price}</h3>
                    {/* Add profit margin or other data if needed */}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className='col-span-1'>
          <Card icon={<FaBox />} title='Employees' value={stats.totalEmployees.count} bgColor="bg-white dark:bg-dark-default" iconBgColor="bg-gray-200" textColor="dark:text-gray-200" description="All employees" profitMargin={stats.totalEmployees.profitMargin} />
        </div>

        <div className='col-span-1'>
          <Card icon={<FaCog />} title='Customers' value={stats.totalCustomers.count} bgColor="bg-white dark:bg-dark-default" iconBgColor="bg-gray-200" textColor="dark:text-gray-200" description="All customers" profitMargin={stats.totalCustomers.profitMargin} />
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