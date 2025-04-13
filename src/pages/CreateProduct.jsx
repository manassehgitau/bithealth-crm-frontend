import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateProduct() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    features: [],
    image: "",
  });
  const [featureInput, setFeatureInput] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureAdd = () => {
    setProduct((prev) => ({
      ...prev,
      features: [...prev.features, featureInput],
    }));
    setFeatureInput("");
  };

  const uploadSingleImage = async (base64) => {
    setLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/uploadImage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${authToken}`,
        },
        body: JSON.stringify({ image: base64 }),
      });
      const data = await response.json();

      // Use imageUrl from response instead of secure_url
      if (response.ok && data.imageUrl) {
        setUrl(data.imageUrl);
        setProduct((prev) => ({ ...prev, image: data.imageUrl }));

        // Success toast
        toast.success("Image uploaded successfully");
      } else {
        console.error("Image upload failed:", data);
        // Error toast
        toast.error("Image upload failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during image upload");
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${authToken}`,
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        toast.success("Product created successfully!");

        // Reset the product state to clear input fields
      setProduct({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        features: [],
        image: "",
      });
      } else {
        toast.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("An error occurred while creating product");
    }
  };

  const UploadInput = () => (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          onChange={uploadImage}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );

  return (
    <div className="flex justify-center flex-col m-8 px-10 py-25 lg:py-20 ">
      <ToastContainer />
      <div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Create New Product
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2">Features</label>
            <div className="flex">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={handleFeatureAdd}
                className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
              >
                Add Feature
              </button>
            </div>
            <ul className="mt-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2">Image Upload</label>
            <UploadInput />
            {url && (
              <div>
                Image uploaded at:{" "}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-2xl"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
