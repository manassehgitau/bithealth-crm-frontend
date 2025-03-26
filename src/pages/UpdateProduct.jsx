import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        features: "",
        image: ""
    });

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
                setProduct({
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    stock: data.stock,
                    features: data.features.join(", "),
                    image: data.image
                });
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const authToken = localStorage.getItem("authToken");
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `bearer ${authToken}`,
                },
                body: JSON.stringify({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                    features: product.features.split(",").map((feature) => feature.trim()),
                    image: product.image,
                }),
            });

            if (response.ok) {
                toast.success("Product updated successfully!");
                navigate(`/products`);
            } else {
                toast.error("Failed to update product");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            toast.error("An error occurred while updating the product");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 h-screen bg-gray-100 dark:bg-gray-900">
            <ToastContainer />
            <div className="bg-white dark:bg-dark-contrast shadow-md rounded-lg border dark:border-dark-contrast p-6 w-full max-w-xl">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Update Product</h2>

                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-100">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-100">Description</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-100">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-100">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-100">Features (comma-separated)</label>
                        <input
                            type="text"
                            name="features"
                            value={product.features}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-100">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={product.image}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        >
                            Update Product
                        </button>
                        <button
                            onClick={() => navigate("/products")}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
