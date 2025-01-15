
"use client"
import './page.css';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Dots:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Dancing+Script:wght@400..700&family=Qwitcher+Grypen:wght@400;700&display=swap');
</style>


const products = [
  {
    id: "2",
    name: "Sophia Leather Tote",
    price: "$400.00",
    image: "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg",
    link: "https://www.wix.com/demone2/womens-accessories/product-page/i-m-a-product-15"
  },
  {
    id: "12",
    name: "Ariana Clutch Bag",
    price: "$250.00",
    image: "https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg",
    link: "https://www.wix.com/demone2/womens-accessories/product-page/i-m-a-product-18"
  },
  {
    id: "7",
    name: "Eva Classic Satchel",
    price: "$300.00",
    image: "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg",
    link: "https://www.wix.com/demone2/womens-accessories/product-page/i-m-a-product-25"
  },
  {
    id: "13",
    name: "Isabella Crossbody Bag",
    price: "$350.00",
    image: "https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg",
    link: "https://www.wix.com/demone2/womens-accessories/product-page/i-m-a-product-20"
  },
  {
    id: 14,
    name: "Quilted Mini Bag",
    price: parseFloat("150.00"),
    image: "https://static.wixstatic.com/media/ea71bb_92ce1b162b474c978b9afe376cc3b892~mv2_d_2487_3298_s_4_2.jpg",
  },
];

export default function ProductPage() {

  const [visibleCards, setVisibleCards] = useState([]);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards((prevVisible) => [...prevVisible, entry.target.id]);
            observer.unobserve(entry.target);  // Stop observing after it's been seen
          }
        });
      },
      { threshold: 0.9 }  // Trigger when 50% of the card is visible
    );

    const cardElements = document.querySelectorAll('.product-card');
    cardElements.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .product-name {
          font-family: "Open Sans", serif;
        }
          .shop-all-btn{
          font-family: "Montserrat", serif;
          }
        `}
      </style>
      <section className="promo-section">
        <div className="promo-bg">
          <img
            src="/cover-img.jpg"
            alt="Promo"
            className="promo-img"
          />
        </div>
        <div className="promo-content">
        </div>
      </section>

      <section className='mt-10'>
        <h2 className="font_5" style={{ textAlign: 'center', fontSize: '24px' }}>
          <span className="best-seller" style={{ letterSpacing: '0.25em' }}>BEST SELLERS</span>
        </h2>
        <section>
          <div className='flex flex-col'>

            <div className="product-container relative">
              {products.map((product) => (
                <Link href={`/product/${product.slug}`} key={product.id}>
                  <div className={`product-card ${visibleCards.includes(String(product.id)) ? 'visible' : ''}`} id={String(product.id)}>
                    <Link href={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} className="product-img" />
                      <div className="product-details">
                        <p className="product-name">{product.name}</p>
                      </div>
                    </Link>
                  </div>
                </Link>
              ))}
              <Link href={"/shopAll"}>
                <button className="shop-all-btn">Shop All Bags</button>
              </Link>
            </div>

          </div>



        </section>
      </section>

    </div>
  );
}
