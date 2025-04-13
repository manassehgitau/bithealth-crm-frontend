import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

function EmployeeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
      const fetchEmployee = async () => {
        try {
          const authToken = localStorage.getItem("authToken");
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/api/admin/employee/${id}`,
            {
              headers: {
                Authorization: `bearer ${authToken}`,
              },
            }
          );
          const data = await response.json();
          console.log(data);
          setEmployee(data);
        } catch (error) {
          console.error("Error fetching Employee:", error);
        }
      };

      fetchEmployee();
    }, [id]);

    const handleDelete = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/admin/employee/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `bearer ${authToken}`,
            },
          }
        );

        if (response.ok) {
          toast.success("Employee deleted successfully!");
          navigate("/Employees"); // Redirect to employee list after delete
        } else {
          toast.error("Failed to delete employee");
        }
      } catch (error) {
        console.error("Error deleting employee:", error);
        toast.error("An error occurred while deleting employee");
      }
    };

    // ✅ Prevent rendering until data is ready
  if (!employee) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-dark-default">
        <p className="text-gray-700 dark:text-gray-100">Loading employee details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-center p-6 h-screen bg-gray-100 dark:bg-dark-default">
      <ToastContainer />
      <div className="flex flex-row items-center justify-center p-6 gap-10 bg-white dark:bg-dark-contrast shadow-md rounded-lg border dark:border-dark-contrast">
        <div className="w-full max-w-md p-4 ">
          <img
            src={employee.image || "./person-placeholder.jpg"}
            alt={employee.username}
            className="w-64 h-64 object-contain rounded-lg mb-4 shadow-md"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-2 dark:text-white my-5">
            {employee.username}
          </h2>
          <div className="my-7">
            <p className="text-gray-700 dark:text-gray-100 mb-2 font-semibold">
              Email:
            </p>
            <p className="text-gray-700 dark:text-gray-100 mb-2 text-lg">
              {employee.email}
            </p>
          </div>
          <p className="text-xl font-semibold mb-2 dark:text-white my-3">
            Phone: {employee.phone}
          </p>
          <p className="text-gray-700 dark:text-gray-100 mb-5">
            location: {employee.location}
          </p>
          <p className="text-gray-700 dark:text-gray-100 mb-5">
            banking Service: {employee.AccountHost}
          </p>
          <p className="text-gray-700 dark:text-gray-100 mb-5">
            account Number: {employee.AccountNumber}
          </p>
          

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded-2xl hover:bg-red-600 text-2xl flex justify-center items-center gap-2"
            >
              <MdDeleteForever /> <span className="text-sm"> Delete</span>
            </button>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded-2xl hover:bg-green-600 text-2xl flex justify-center items-center gap-2"
              onClick={() => navigate(`/employees/update/${id}`)}
            >
              <FaTasks /> <span className="text-sm"> Update</span>
            </button>
            <button
              onClick={() => navigate("/employees")}
              className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 flex justify-center items-center gap-2"
            >
              <FaBackward /> <span className="text-sm"> Employees</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
