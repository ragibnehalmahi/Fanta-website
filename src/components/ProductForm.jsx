// src/components/ProductForm.jsx
import React, { useState, useEffect } from "react";

const ProductForm = ({ addProduct, editProduct, currentProduct }) => {
  const [product, setProduct] = useState({
    id: null,
    image: "",
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
  });

  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [currentProduct]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      editProduct(product);
    } else {
      addProduct(product);
    }
    setProduct({
      id: null,
      image: "",
      title: "",
      description: "",
      category: "",
      brand: "",
      price: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="file"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500"
      />
      <input
        type="text"
        name="title"
        value={product.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="brand"
        value={product.brand}
        onChange={handleChange}
        placeholder="Brand"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        {product.id ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
