"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .footer-ul {
          font-family: "Open Sans", serif;
          font-weight: 500;
        }
        `}
      </style>

      <div className="footer mx-auto py-12 px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="ml-10 footer-logo">
          <img src="/logo.png" alt="" width={180} height={10}/>
        </div>
        <div className="footer-ul">
          <ul className="space-y-3">
            <li><Link href="">Shop All</Link></li>
            <li><Link href="">Our Story</Link></li>
            <li><Link href="">Our Craft</Link></li>
            <li><Link href="">Gift Card</Link></li>
            <li><Link href="">Contact</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 footer-ul">
            <li><Link href="">FAQ</Link></li>
            <li><Link href="">Shipping & Returns</Link></li>
            <li><Link href="">Store Policy</Link></li>
            <li><Link href="">Payment Methods</Link></li>
            <li><Link href="">Stockists</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 footer-ul">
            <li><Link href="">Facebook</Link></li>
            <li><Link href="">Instagram</Link></li>
            <li><Link href="">Twitter</Link></li>
            <li><Link href="">Tumblr</Link></li>
            <li><Link href="">Pinterest</Link></li>
          </ul>
        </div>
        {/* <Link href="/contact">
          <div className="contact-btn">Contact Us</div>
        </Link> */}
      </div>

      <div className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-sm text-gray-500 copyright">
          ©2025 Created. - Anshu Raj
        </div>
      </div>
    </div>
  );
};

export default Footer;
