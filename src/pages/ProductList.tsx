import React from 'react';
import { Link } from 'react-router-dom';

// Mock product data
const products = [
  { id: 1, name: 'Product 1', price: 10000, image: 'https://picsum.photos/seed/product1/300/300' },
  { id: 2, name: 'Product 2', price: 20000, image: 'https://picsum.photos/seed/product2/300/300' },
  { id: 3, name: 'Product 3', price: 30000, image: 'https://picsum.photos/seed/product3/300/300' },
  { id: 4, name: 'Product 4', price: 40000, image: 'https://picsum.photos/seed/product4/300/300' },
];

export default function ProductList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price.toLocaleString()} 원</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
