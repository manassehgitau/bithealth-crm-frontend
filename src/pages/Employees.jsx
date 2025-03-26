import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EmployeesTable() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
          toast.success("Employees retrieved successfully");
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

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDeleteLead = async (employeeId, leadId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/employee/${employeeId}/leads/${leadId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `bearer ${authToken}`,
          },
        }
      );

      if (response.ok) {
        setEmployees((prevEmployees) =>
          prevEmployees.map((emp) =>
            emp._id === employeeId
              ? {
                  ...emp,
                  salesLeads: emp.salesLeads.filter(
                    (lead) => lead._id !== leadId
                  ),
                }
              : emp
          )
        );
        toast.success("Lead deleted successfully");
      } else {
        toast.error("Failed to delete lead");
      }
    } catch (error) {
      console.error("Error deleting lead:", error);
      toast.error("An error occurred while deleting lead");
    }
  };

  const handleAssignTask = (employeeId) => {
    // Logic to assign task can go here
    toast.info(`Task assigned to employee with ID: ${employeeId}`);
  };

  return (
    <div className="container mx-auto p-6 h-screen pt-30">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Employees</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  uppercase tracking-wider">
                Username
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Location
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:text-black text-sm">
                  {employee.username}
                </td>
                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:text-black text-sm">
                  {employee.email}
                </td>
                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:text-black text-sm">
                  {employee.phone}
                </td>
                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:text-black text-sm">
                  {employee.location}
                </td>
                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:text-black text-sm">
                  {employee.role}
                </td>
                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:text-black text-sm">
                  {employee.status}
                </td>
                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm space-x-4">
                  <button
                    onClick={() => handleViewDetails(employee)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleAssignTask(employee._id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Assign Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedEmployee && (
        <div className="mt-8 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {selectedEmployee.username}'s Details
          </h3>
          <p><strong>Email:</strong> {selectedEmployee.email}</p>
          <p><strong>Phone:</strong> {selectedEmployee.phone}</p>
          <p><strong>Location:</strong> {selectedEmployee.location}</p>
          <p><strong>Role:</strong> {selectedEmployee.role}</p>
          <p><strong>Status:</strong> {selectedEmployee.status}</p>
          <p><strong>Account Number:</strong> {selectedEmployee.AccountNumber}</p>
          <p><strong>Account Host:</strong> {selectedEmployee.AccountHost}</p>

          <h4 className="text-lg font-semibold mt-4">Sales Leads</h4>
          <ul className="list-disc ml-5">
            {selectedEmployee.salesLeads.map((lead) => (
              <li key={lead._id}>
                <p>
                  <strong>Lead Status:</strong> {lead.leadStatus} -{" "}
                  <strong>Lead Details:</strong> {lead.leadDetails}
                </p>
                <button
                  onClick={() => handleDeleteLead(selectedEmployee._id, lead._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mt-2 rounded"
                >
                  Delete Lead
                </button>
              </li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold mt-4">Duties</h4>
          <ul className="list-disc ml-5">
            {selectedEmployee.duty.map((duty) => (
              <li key={duty._id}>
                <p>
                  <strong>Duty Status:</strong> {duty.dutyStatus} -{" "}
                  <strong>Deadline:</strong>{" "}
                  {new Date(duty.deadline).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
