import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdMoreTime } from "react-icons/md";


export default function EmployeesTable() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();


  const handleViewDetails = (id) => {
    console.log(id);
    navigate(`/employees/${id}`);
  }

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/admin/employee`,
          {
            method: "GET",
            headers: {
              Authorization: `bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok && data.employees) {
          setEmployees(data.employees);
          // toast.success("Employees retrieved successfully");
        } else {
          toast.error("Failed to retrieve employees");
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        toast.error("An error occurred while fetching employees");
      }
    };

    fetchEmployees();
  }, []);

  
  return (
    <div className="p-6 h-screen pt-30">
      <ToastContainer />
      <div className="flex justify-between items-center mb-6 px-6">
              <h1 className="text-3xl font-bold">Employees</h1>
              <div className="flex space-x-4">
                <Link to="/employees/create">
                  <button className="bg-purple-default text-white px-4 py-2 rounded-2xl hover:bg-green-600">
                    Employees
                  </button>
                </Link>
                
              </div>
            </div>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-100  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-left text-xs font-semibold text-gray-600  uppercase tracking-wider">
                Username
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-100  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-100  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-100  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Location
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-100  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-100  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-100  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td className="px-5 py-3 border-b border-gray-200 bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200  text-sm">
                  {employee.username}
                </td>
                <td className="px-5 py-3 border-b  border-gray-200 bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-sm">
                  {employee.email}
                </td>
                <td className="px-5 py-3 border-b  border-gray-200 bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-sm">
                  {employee.phone}
                </td>
                <td className="px-5 py-3 border-b  border-gray-200 bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-sm">
                  {employee.location}
                </td>
                <td className="px-5 py-3 border-b  border-gray-200 bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-sm">
                  {employee.role}
                </td>
                <td className="px-5 py-3 border-b  border-gray-200 bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-sm">
                  {employee.status}
                </td>
                <td className="px-5 py-3 border-b  border-gray-200 bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 text-sm space-x-4">
                  <button
                    onClick={() => handleViewDetails(employee._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl flex justify-center items-center"
                  >
                    <MdMoreTime /> <span className="pl-4"> See More</span>

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}
