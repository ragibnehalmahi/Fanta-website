// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.price} USD</p>
      <button
        onClick={() => onEdit(product)}
        className="mt-2 w-full p-2 bg-yellow-500 text-white rounded"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(product.id)}
        className="mt-2 w-full p-2 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
