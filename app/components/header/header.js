"use client";
import Link from 'next/link';
import './header.css';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState, useEffect } from 'react';
import CartSidebar from '../cart-sidebar/page';


const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false); // Track sheet open state

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (Array.isArray(cartItems)) {
      const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      setCartItemCount(totalItems);
    } else {
      setCartItemCount(0);
    }
  }, []);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev); // Toggle the cart open state
  };

  return (
    <header className="relative z-10 flex flex-col items-center justify-center p-6">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .nav {
          font-family: "Itim", serif;
          font-weight: 400;
        }
        `}
      </style>
      
      <div className="container flex justify-between items-center max-w-screen-xl mx-auto">
        
        {/* Search Bar */}
        <div className="relative flex items-center max-w-[190px] ml-3">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute left-4 w-5 h-5 text-red-600">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            id="query"
            className="w-full h-12 pl-10 rounded-lg border-none text-red-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            type="search"
            placeholder="Search..."
            name="searchbar"
          />
        </div>

        {/* Logo and Navigation */} 
        <div className="logo-nav flex flex-col items-center space-y-5 relative">
          <Link href="/" className="logo text-red-600 font-cursive mb-10">
          <img src="/logo.png" alt="" width={180} height={10}/>
          </Link>
          <nav className="nav flex space-x-8 text-lg py-4">
            <Link href="/shopAll" className="text-black">Shop All</Link>
            <Link href="/our-story" className="text-black">Our Story</Link>
            <Link href="/" className="text-black">Home</Link>
            <Link href="/gift-card" className="text-black">Gift Card</Link>
            <Link href="/contact" className="text-black">Contact</Link>
          </nav>
        </div>

        {/* Social Icons and Buttons */}
        <div className="flex items-center space-x-8 social-btns">
          

          {/* Login Button */}
          <Link href="/login">
            <div className="flex ml-20 items-center justify-center bg-[#BC4C2A] rounded-full p-2 w-10 h-10 cursor-pointer transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BC4C2A]">
              <svg viewBox="0 0 24 24" fill="white" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
              </svg>
            </div>
          </Link>

          {/* Cart Button */}
          <div onClick={toggleCart} className="relative inline-block">
            <div tabIndex={0} className="btn-cart flex items-center justify-center bg-[#BC4C2A] rounded-full p-2 w-10 h-10 cursor-pointer transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BC4C2A]">
              <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                <title>icon-cart</title>
                <path fill="none" stroke="white" strokeWidth="2" transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
            <SheetDescription>
              <CartSidebar isOpen={isCartOpen} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
