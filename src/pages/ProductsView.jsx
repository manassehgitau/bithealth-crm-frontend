import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/products`, {
          headers: {
            Authorization: `bearer ${authToken}`,
          },
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="px-10 pt-30 h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product List</h1>
        <div className="flex space-x-4">
          <Link to="/products/create">
            <button className="bg-purple-default text-white px-4 py-2 rounded-2xl hover:bg-green-600">
              Create New Product
            </button>
          </Link>
          
        </div>
      </div>

      {/* Header Section */}

      <div className="relative overflow-x-auto">
        <table className="text-left w-full whitespace-nowrap">
          <thead>
            <tr className="border-gray-300 border-b">
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Stock</th>
              <th scope="col" className="px-6 py-3">Image</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product, index) => (
              <tr
                key={product._id}
                className=" border-gray-700 dark:border-gray-300 border-b hover:bg-purple-default cursor-pointer rounded-2xl"
                onClick={() => handleRowClick(product._id)}
              >
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">{product.name}</td>
                <td className="py-3 px-6 text-left">{product.price}</td>
                <td className="py-3 px-6 text-left">{product.stock}</td>
                
                <td className="py-3 px-6 text-left">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default ProductTable;
