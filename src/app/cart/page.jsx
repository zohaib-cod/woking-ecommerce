// src/app/cart/page.jsx (Cart Page)
'use client';

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
            <Link href="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cart.map((item, index) => (
                <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">Size: {item.size}</p>
                      <div className="flex items-center mb-2">
                        <span className="text-gray-600 mr-2">Color:</span>
                        <div 
                          className="w-6 h-6 rounded-full border border-gray-300"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                      <p className="text-blue-600 font-bold text-lg mb-4">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-l-md flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-10 h-8 bg-gray-100 flex items-center justify-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-r-md flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <button 
                onClick={clearCart}
                className="text-red-600 hover:text-red-800"
              >
                Clear Cart
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mb-4">
                Proceed to Checkout
              </button>
              
              <Link 
                href="/shop" 
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-md hover:bg-gray-300 block text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}