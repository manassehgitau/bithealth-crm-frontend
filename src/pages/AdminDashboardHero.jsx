import React, { useState, useEffect } from "react";
import Card from "../components/DetailsDashboardCards";
import { dailyRevenue } from "../assets/ChartData";
import { FaBox, FaCog, FaShoppingCart, FaUsers } from "react-icons/fa";
import { SiUnitednations } from "react-icons/si";
import PieChartCard from "../components/PieChartCard";
import { AreaChartComponent } from "../components/AreaChart";
import BarGraph from "../components/BarGraph";
import VectorMap from "../components/VectorMap";

function AdminDashboardHero() {
  const [stats, setStats] = useState({
    totalUsers: { count: 0, profitMargin: 0 },
    totalEmployees: { count: 0, profitMargin: 0 },
    totalCustomers: { count: 0, profitMargin: 0 },
    totalProducts: { count: 0, profitMargin: 0 },
  });
  const [products, setProducts] = useState([]);

  const [dataBar, setDataBar] = useState([]);

  // Fetch data from backend API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/admin/stats`,
          {
            headers: {
              Authorization: `bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();

        // Update state with fetched data
        setStats({
          totalUsers: data.totalUsers || { count: 0, profitMargin: 0 },
          totalEmployees: data.totalEmployees || { count: 0, profitMargin: 0 },
          totalCustomers: data.totalCustomers || { count: 0, profitMargin: 0 },
          totalProducts: data.totalProducts || { count: 0, profitMargin: 0 },
        });
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStats();
  }, []);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/admin/products`,
          {
            headers: {
              Authorization: `bearer ${authToken}`,
            },
          }
        ); // Replace with your actual API endpoint
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch data from API and update chart data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/admin/products`,
          {
            headers: {
              Authorization: `bearer ${authToken}`,
            },
          }
        ); // Replace with your API endpoint
        const result = await response.json();

        // Update the dataBar state with dynamic data
        const allBarData = [];
        let newData = {};

        result.map((product) => {
          newData = {
            label: product.name,
            value: product.stock,
          };
          allBarData.push(newData);
        });
        setDataBar(allBarData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grow p-8 pt-25">
      <h2 className="inline md:hidden text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 mt-5 gap-5 dark:text-gray-900">
        <div className="col-span-1">
          <Card
            icon={<FaShoppingCart />}
            title="Products"
            value={stats.totalProducts.count}
            bgColor="bg-purple-default"
            iconBgColor="bg-gray-200"
            textColor="text-gray-200"
            description="All Products"
            profitMargin={stats.totalProducts.profitMargin}
          />
        </div>
        <div className="col-span-1 ">
          <Card
            icon={<FaUsers />}
            title="Users"
            value={stats.totalUsers.count}
            bgColor="bg-white dark:bg-dark-default"
            iconBgColor="bg-gray-200"
            textColor="dark:text-gray-200"
            description="All users of the platform"
            profitMargin={stats.totalUsers.profitMargin}
          />
        </div>

        <div className="md:col-span-2 row-span-1 lg:row-span-2 bg-white dark:bg-dark-default dark:text-gray-300 py-5 px-4 rounded-4xl order-last md:order-none">
          <div>
            <div>
              <h3 className="text-2xl font-bold">Product Statistics</h3>
              <p className="text-sm text-gray-700 dark:text-gray-100">
                {" "}
                Track your Product Sales
              </p>
            </div>

            <div>
              <PieChartCard />
            </div>

            <div>
              {products.slice(0, 3).map((product) => (
                <div
                  className="flex flex-row justify-between py-2"
                  key={product._id}
                >
                  <div className="flex flex-row justify-between gap-5">
                    <div>
                      <FaShoppingCart />
                    </div>
                    <h3>{product.name}</h3>
                  </div>
                  <div className="flex flex-row justify-start gap-7">
                    <h3>{product.price}</h3>
                    {/* Add profit margin or other data if needed */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <Card
            icon={<FaBox />}
            title="Employees"
            value={stats.totalEmployees.count}
            bgColor="bg-white dark:bg-dark-default"
            iconBgColor="bg-gray-200"
            textColor="dark:text-gray-200"
            description="All employees"
            profitMargin={stats.totalEmployees.profitMargin}
          />
        </div>

        <div className="col-span-1">
          <Card
            icon={<FaCog />}
            title="Customers"
            value={stats.totalCustomers.count}
            bgColor="bg-white dark:bg-dark-default"
            iconBgColor="bg-gray-200"
            textColor="dark:text-gray-200"
            description="All customers"
            profitMargin={stats.totalCustomers.profitMargin}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white p-4 rounded-2xl shadow-lg dark:bg-dark-default dark:text-white">
          <h3 className="text-lg font-semibold mb-4">Sales Data</h3>
          <AreaChartComponent dailyRevenue={dailyRevenue} />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg dark:bg-dark-default dark:text-white">
          <h3 className="text-lg font-semibold mb-4">Product Data</h3>
          <BarGraph data={dataBar} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 my-5 gap-5 items-stretch">
        <div className="px-10 bg-white py-4 my-5 rounded-2xl shadow-lg dark:bg-dark-default dark:text-white h-full flex flex-col">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Top 3 products</h1>
          </div>

          <div className="relative overflow-x-auto">
            <table className="text-left w-full whitespace-nowrap">
              <thead>
                <tr className="border-gray-300 border-b">
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {products.slice(0, 5).map((product, index) => (
                  <tr
                    key={product._id}
                    className=" border-gray-700 dark:border-gray-300 border-b "
                  >
                    <td className="py-3 px-6 text-left">{index + 1}</td>
                    <td className="py-3 px-6 text-left">{product.name}</td>

                    <td className="py-3 px-6 text-left">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-7 py-1 bg-white my-5 rounded-2xl shadow-lg dark:bg-dark-default h-full flex flex-col">
          <div className="flex justify-between">
            <div className="pt-3 pb-4">
              <h3 className="text-2xl font-bold">Customer Growth</h3>
            </div>
            <div className="pt-3 pb-4 text-4xl flex justify-center items-center">
              <SiUnitednations />
            </div>
          </div>
          <div className="h-97 rounded-2xl">
            <VectorMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardHero;
