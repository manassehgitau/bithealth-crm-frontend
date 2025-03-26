import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const authToken = localStorage.getItem("authToken");
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/products/${id}`, {
                    headers: {
                        Authorization: `bearer ${authToken}`,
                    },
                });
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleDelete = async () => {
        try {
            const authToken = localStorage.getItem("authToken");
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/products/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `bearer ${authToken}`,
                },
            });

            if (response.ok) {
                toast.success("Product deleted successfully!");
                navigate("/products"); // Redirect to products list after delete
            } else {
                toast.error("Failed to delete product");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("An error occurred while deleting product");
        }
    };

    if (!product) return <div className="h-screen flex justify-center items-center text-2xl">Loading...</div>;

    return (
        <div className="flex flex-row items-center justify-center p-6 h-screen bg-gray-100 dark:bg-dark-default">
            <ToastContainer />
            <div className="flex flex-row items-center justify-center p-6 gap-10 bg-white dark:bg-dark-contrast shadow-md rounded-lg border dark:border-dark-contrast">
                <div className="w-full max-w-md p-4 ">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-64 h-64 object-contain rounded-lg mb-4 shadow-md"
                    />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold mb-2 dark:text-white">{product.name}</h2>
                    <p className="text-gray-700 dark:text-gray-100 mb-2 font-semibold">Description:</p>
                    <p className="text-gray-700 dark:text-gray-100 mb-2 text-lg">{product.description}</p>
                    <p className="text-xl font-semibold mb-2 dark:text-white">Price: Kshs. {product.price}</p>
                    <p className="text-gray-700 dark:text-gray-100 mb-2">Stock: {product.stock}</p>
                    <p className="text-gray-700 dark:text-gray-100 mb-2">
                        Features: {product.features.length > 0 ? product.features.join(", ") : "No features listed"}
                    </p>

                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Delete Product
                        </button>
                        <button
                            onClick={() => navigate(`/product/update/${id}`)}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        >
                            Update Product
                        </button>
                        <button
                            onClick={() => navigate("/products")}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Back to Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
