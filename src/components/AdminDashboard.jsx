// src/components/AdminDashboard.jsx
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    product.id = Date.now();
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4 bg-gray-100 h-screen">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <ProductForm
          addProduct={addProduct}
          editProduct={editProduct}
          currentProduct={editingProduct}
        />
      </div>
      <div className="w-2/3 p-4 grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEditClick}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
