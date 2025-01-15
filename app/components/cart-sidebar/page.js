'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Notification from "../notification/page";
import "./page.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    try {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
    } catch (error) {
      console.error("Error parsing cart data:", error);
      setCartItems([]);
    }
  }, [isOpen]);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setNotification("Item removed from cart!");
    window.dispatchEvent(new Event("storage"));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <aside
      ref={sidebarRef}
      className={`cart-sidebar fixed right-0 top-0 w-full md:w-1/3 lg:w-1/4 h-full bg-white shadow-lg p-6 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-10`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Your Cart</h2>
        <button
          onClick={onClose}
          aria-label="Close Cart"
          className="text-gray-500 hover:text-gray-700 transition"
        >
          <i className="fas fa-chevron-right text-xl"></i>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[calc(100vh-120px)] mb-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img
                src={item.imageUrl || `/product-${item.id}.jpg`}
                alt={item.name}
                className="w-16 h-16 object-cover mr-4 rounded"
              />
              <div className="flex-1">
                <div className="text-gray-700 text-m">{item.name}</div>
                <div className="text-gray-700 text-sm">${item.price}</div>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    className="border border-gray-300 p-1 w-12 rounded-md"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <i
                    onClick={() => removeItem(item.id)}
                    className="fas fa-trash ml-4 cursor-pointer hover:text-red-500 transition"
                    aria-label="Remove item"
                  ></i>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Subtotal */}
      {/* {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-[-10] text-gray-700 mb-14">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
        </div>
      )} */}

      {/* Fixed Footer for "View Cart" */}
      <div className="fixed bottom-0 left-[150] md:w-1/3 lg:w-2/4 bg-white p-4 shadow-lg">
        <Link href="/cart">
          <button className="bg-orange-600 text-white py-2 px-4 w-150 transition duration-300 ease-in-out hover:bg-orange-400 text-m rounded-lg">
            View Cart
          </button>
        </Link>
      </div>

      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </aside>
  );
};

export default CartSidebar;
