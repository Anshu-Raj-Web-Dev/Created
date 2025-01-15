"use client";
import React, { useState } from "react";
import products from "@/app/data/product";
import "./page.css";
import Link from "next/link";
import CartSidebar from "@/app/components/cart-sidebar/page";
import Notification from "@/app/components/notification/page";

const ProductPage = ({ params }) => {
  const { id } = params;
  const product = products.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [buyNowLoading, setBuyNowLoading] = useState(false);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">
        <h1>Product not found</h1>
        <Link href="/" className="text-blue-600 underline">
          Return to home
        </Link>
      </div>
    );
  }

  const addToCart = () => {
    let cartItems;
  
    try {
      const storedCart = localStorage.getItem("cart");
      cartItems = JSON.parse(storedCart) || [];
  
      if (!Array.isArray(cartItems)) {
        throw new Error("Cart data is not an array");
      }
    } catch (error) {
      console.error("Error reading or parsing cart data:", error);
      cartItems = [];
    }
  
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex > -1) {
      cartItems[existingProductIndex].quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity, imageUrl: `/product-${product.id}.jpg` });
    }
  
    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  
    // Trigger state changes to update UI
    setCartOpen(true);
    setNotification(`${product.name} added to cart!`);
    window.dispatchEvent(new Event("storage"));
  };
  

  const removeItem = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setNotification("Item removed from cart!");
    window.dispatchEvent(new Event("storage"));
  };

  const handleBuyNow = async () => {
    setBuyNowLoading(true); // Start loading state

    // Simulate a delay (e.g., waiting for an API call or processing)
    setTimeout(() => {
      alert("App in production"); // Show alert message
      setBuyNowLoading(false); // Reset loading state
    }, 2000); // 2 seconds delay
  };

  return (
    <article className="flex flex-col py-1 article">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .productName {
          font-family: "Open Sans", serif;
          font-weight: 300;
        }
        `}
      </style>
      <div className="bg-white pb-10">
        <main className="flex justify-center mt-8">
          <div className="flex space-x-16">
            <div className="w-1/2">
              <img
                width={500}
                height={500}
                alt={product.name}
                src={`/product-${product.id}.jpg`}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-1/2">
              <h1 className="productName text-3xl font-semibold mb-4">{product.name.replace("'", "&apos;")}</h1>
              <p className="text-gray-500 py-2">SKU: {product.sku}</p>
              <p className="text-red-500 text-2xl mt-4 product-price">{product.price}</p>
              <div className="mt-4">
                <label className="block text-gray-700 product-quantity" htmlFor="quantity">Quantity</label>
                <input
                  className="border p-2 w-20 mt-2 rounded-md"
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <button onClick={addToCart} className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300">
                  Add to Cart
                </button>
                {notification && (
  <Notification
    message={notification}
    onClose={() => setNotification(null)}
  />
)}
                <button
                  onClick={handleBuyNow}
                  className={`px-6 py-3 rounded-lg text-white transition-all duration-300 ${
                    buyNowLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-black hover:bg-gray-900"
                  }`}
                  disabled={buyNowLoading}
                >
                  {buyNowLoading ? "Processing..." : "Buy Now"}
                </button>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 product-info">PRODUCT INFO</h2>
                <p className="text-gray-700 mt-2 product-desc">{product.description}</p>
              </div>
              <div className="refund">RETURN & REFUND POLICY<div className="add">+</div></div>
              <div className="shipping">SHIPPING INFO<div className="add">+</div></div>
            </div>
            
          </div>
          
        </main>
      </div>

      <div className="bg-gray-50 font-roboto py-12">
        <main className="container mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6 pr-4">You Might Also Like</h2>
          <div className="flex space-x-6 overflow-x-auto">
            {products.map((product) => (
              <div key={product.id} className="relative bg-white rounded-lg p-4 flex-shrink-0" style={{ width: "220px" }}>
                {product.isBestSeller && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Best Seller</div>
                )}
                <Link href={`/product/${product.id}`}>
                  <img alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" src={`/product-${product.id}.jpg`} width="220" height="220" />
                  <div className="text-center">
                    <p className="text-gray-700 font-medium">{product.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* New Section for Product-Specific Description */}
          
        </main>
      </div>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </article>
  );
};

export default ProductPage;
