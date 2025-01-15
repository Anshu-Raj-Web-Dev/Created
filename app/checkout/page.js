"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function PlaceOrder() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const router = useRouter();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
    calculateTotal(cartData);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state

    const orderItems = cartItems.map((item) => ({
      ...item,
      quantity: item.quantity,
    }));

    const orderData = {
      address: formData,
      items: orderItems,
      amount: totalPrice + 50,
    };

    try {
      const response = await axios.post("/api/order/place", orderData);
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.href = session_url;
      } else {
        setError("Error placing order");
      }
    } catch (error) {
      console.error("Order placement failed:", error);
      alert("App in production")
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={placeOrder} className="pb-10 flex flex-col md:flex-row items-start justify-center gap-12 mt-4 mx-auto max-w-6xl p-6 bg-white rounded-lg shadow-xl">
      <style>

      {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .form {
          font-family: "Open Sans", serif;
          font-weight: 400;
        }
          .summary {
           font-family: "Montserrat", serif;
          font-weight: 400;
        }
        `}
        </style>
      <div className="w-full max-w-md form">
        <p className="text-3xl font-semibold mb-8 text-center text-gray-800">Delivery Information</p>
        
        {/* Error Message */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {/* Form Inputs */}
        <div className="flex gap-4 mb-6">
          <input
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
          <input
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
        </div>
        
        <input
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
          className="mb-6 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
        />
        <input
          required
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          type="text"
          placeholder="Street"
          className="mb-6 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
        />
        <div className="flex gap-4 mb-6">
          <input
            required
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            type="text"
            placeholder="City"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
          <input
            required
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            type="text"
            placeholder="State"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
        </div>
        <div className="flex gap-4 mb-6">
          <input
            required
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            type="text"
            placeholder="Zipcode"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
          <input
            required
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            type="text"
            placeholder="Country"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
        </div>
        <input
          required
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          type="text"
          placeholder="Phone"
          className="mb-6 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
        />
      </div>

      <div className="w-full max-w-lg bg-gray-50 p-6 rounded-lg shadow-md summary">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Order Summary</h2>
        
        <div className="flex justify-between mb-4">
          <p className="text-lg text-gray-700">Subtotal</p>
          <p className="text-lg text-gray-700">${totalPrice.toFixed(2)}</p>
        </div>
        <hr className="border-gray-300 mb-4" />
        
        <div className="flex justify-between mb-4">
          <p className="text-lg text-gray-700">Delivery Fee</p>
          <p className="text-lg text-gray-700">${totalPrice === 0 ? 0 : 2}</p>
        </div>
        <hr className="border-gray-300 mb-4" />
        
        <div className="flex justify-between mb-6">
          <p className="text-xl font-semibold text-gray-800">Total</p>
          <b className="text-xl font-semibold text-gray-800">${totalPrice === 0 ? 0 : totalPrice + 2}</b>
        </div>
        
        <button
          type="submit"
          className={`w-full py-3 text-white rounded-lg transition-all duration-300 focus:outline-none ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-800 hover:bg-red-700 focus:ring-4 focus:ring-red-500'}`}
          disabled={loading}
        >
          {loading ? "Processing..." : "PROCEED TO PAYMENT"}
        </button>
      </div>
    </form>
  );
}
