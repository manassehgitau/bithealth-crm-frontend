import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    features: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/admin/products/${id}`,
          {
            headers: {
              Authorization: `bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();
        setProduct({
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock,
          features: data.features.join(", "),
          image: data.image,
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
      [name]: value,
    }));
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/admin/products/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${authToken}`,
          },
          body: JSON.stringify({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            features: product.features
              .split(",")
              .map((feature) => feature.trim()),
            image: product.image,
          }),
        }
      );

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

  const uploadSingleImage = async (base64) => {
    setLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/admin/uploadImage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${authToken}`,
          },
          body: JSON.stringify({ image: base64 }),
        }
      );
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
    <div className="py-10">
      <ToastContainer />
      <div className="flex justify-center flex-col m-8 px-10 my-20 lg:h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Update Product
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-700 dark:border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-700 dark:border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-700 dark:border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-700 dark:border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">
              Features (comma-separated)
            </label>
            <input
              type="text"
              name="features"
              value={product.features}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-700 dark:border-gray-300 rounded-lg"
            />
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

          <div className="flex gap-4 py-10 justify-center items-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
            {loading ? "Creating..." : "Update Product"}
              
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
