"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import './page.css';
import Link from 'next/link';
import Notification from '../components/notification/page';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notification, setNotification] = useState(null);

  

  // Get cart items from localStorage on component mount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
    calculateTotal(cartData);
  }, []);

  // Calculate total price based on cart items
  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  // Update quantity of items
  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    let updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Trigger notification for item removal
    setNotification("Item removed from cart!");

    // Dispatch an event to notify other components about the change
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="bg-white font-sans cart-container">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .summary {
          font-family: "Open Sans", serif;
          font-weight: 300;
        }
        `}
      </style>
      <div className="max-w-7xl mx-auto p-4">
        <main className="flex space-x-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="border-b py-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover" />
                    <div>
                      <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                      <p className="text-gray-500">${Number(item.price).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-md">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-2 text-gray-600 hover:text-white hover:bg-red-600 transition duration-200">
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                        className="w-12 text-center border-l border-r text-gray-600 focus:outline-none"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-2 text-gray-600 hover:text-white hover:bg-red-600 transition duration-200">
                        +
                      </button>
                    </div>
                    <p className="text-lg text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-500 transition duration-200">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
            {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)} // Clear the notification after it closes
        />
      )}
          </div>

          <div className="w-full md:w-1/3 summary">
          <div className='ml-10'>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Order Summary</h2>
            <div className="border-b py-4">
              <div className="flex justify-between mb-4">
                <p className="text-lg">Subtotal</p>
                <p className="text-lg">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg">Estimate Delivery</p>
                <p className="text-lg">$2.00</p>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <p className="text-2xl font-semibold">Total</p>
              <p className="text-xl font-semibold">${(totalPrice + 2).toFixed(2)}</p>
          </div>
            </div>

            <Link href="/checkout">
              <button className="checkout-btn bg-red-700 text-white py-3 w-full rounded-lg shadow-md hover:bg-red-600 focus:ring-4 focus:ring-red-500 transition duration-300">
                Checkout
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
