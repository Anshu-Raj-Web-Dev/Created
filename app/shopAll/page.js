"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import products from "../data/product"; // Importing products from your data
import { useRouter } from "next/navigation";

const Page = () => {
  const [visible, setVisible] = useState(false);
  const productRefs = useRef([]);
  const router = useRouter(); 

  useEffect(() => {
    // Check if the page has already been reloaded in the current session
    const hasReloaded = sessionStorage.getItem("pageReloaded");

    if (!hasReloaded) {
      // If the page hasn't been reloaded yet, reload the page
      sessionStorage.setItem("pageReloaded", "true");
      window.location.reload();
    }

    // Proceed with the rest of the logic if the page has already been reloaded
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Set the source to the data-src attribute
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      });
    });

    productRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      productRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref); // Cleanup observer
        }
      });
    };
  }, []);

  return (
    <div>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .product-name {
          font-family: "Open Sans", serif;
          font-weight: 300;
        }
          h2{
          font-family: "Montserrat", serif;
          }
          ul{
          font-family: "Montserrat", serif;
          }
        `}
      </style>
      <section className="flex space-x-6 p-6 text-gray-600 relative">
        {/* Left - Browse By */}
        <div className="w-1/4 ml-10 sticky top-24">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Browse by</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/shopAll" className="hover:text-gray-800 transition-all duration-300">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/shopAll?category=bags" className="hover:text-gray-800 transition-all duration-300">
                Bags
              </Link>
            </li>
            <li>
              <Link href="/shopAll?category=best-sellers" className="hover:text-gray-800 transition-all duration-300">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link href="/shopAll?category=leather-belts" className="hover:text-gray-800 transition-all duration-300">
                Leather Belts
              </Link>
            </li>
            <li>
              <Link href="/shopAll?category=mini-goods" className="hover:text-gray-800 transition-all duration-300">
                Mini Leather Goods
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Products */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={product.id}
                className="product-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                ref={(el) => (productRefs.current[index] = el)} // Assign each product card ref
              >
                <Link href={`/product/${product.id}`} className="relative flex flex-col justify-center">
                  <div className="h-74 w-full overflow-hidden"> {/* Reduced height from 72 to 64 */}
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col items-center mt-4 px-4 pb-4">
                    <p className="product-name text-lg text-black font-medium">{product.name}</p>
                    <p className="text-red-600 text-xl">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No products available.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Page;
