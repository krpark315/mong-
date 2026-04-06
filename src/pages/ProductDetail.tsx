import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  // Mock product detail
  const product = {
    id: id,
    name: `Product ${id}`,
    price: 10000 * Number(id),
    image: `https://picsum.photos/seed/product${id}/600/600`,
    description: 'This is a detailed description of the product.',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">{product.price.toLocaleString()} 원</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-black text-white px-6 py-3 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
