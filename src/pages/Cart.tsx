import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">장바구니</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">장바구니가 비어있습니다.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-b border-gray-200 py-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price.toLocaleString()} 원 x {item.quantity}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
          <div className="text-right mt-8">
            <p className="text-xl font-bold">총 합계: {total.toLocaleString()} 원</p>
            <button className="bg-black text-white px-8 py-3 mt-4 rounded-lg">주문하기</button>
          </div>
        </div>
      )}
    </div>
  );
}
