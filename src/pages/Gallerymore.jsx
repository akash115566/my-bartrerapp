import React from "react";
import "../style/gallerymore.css";

const GalleryMore = () => {
  const moreProducts = [
    "/Gallery-1.jpeg",
    "/Gallery-2.jpeg",
    "/Gallery-3.jpeg",
    "/Gallery-4.jpeg",
    "/Gallery-5.jpeg",
    "/Gallery-6.jpeg",
    "/Gallery-7.jpeg",
    "/Gallery-8.jpeg",
    "/Gallery-21.jpeg",
    "/Gallery-10.jpeg",
    "/Gallery-11.jpeg",
    "/Gallery-12.jpeg",
    "/Gallery-13.jpeg",
    "/Gallery-14.jpeg",
    "/Gallery-15.jpeg",
    "/Gallery-16.jpeg",
    "/Gallery-17.jpeg",
    "/Gallery-18.jpeg",
    "/Gallery-19.jpeg",
    "/Gallery-20.jpeg",
  ];


  const paragraphs = [
    {
      title: "Professional Tone",
      text: "Barter Media brings you a wide range of products and solutions that help your brand shine. Our curated offerings are designed to maximize visibility and engagement across all media platforms."
    },
    {
      title: "Creative / Engaging",
      text: "Step into a world where innovation meets opportunity. With Barter Media, your products reach the right audience at the right time, making every campaign count."
    },
    {
      title: "Conversion-Focused",
      text: "From digital campaigns to promotional solutions, our products empower your brand to grow faster and smarter. Join the Barter Media network and see the difference today."
    },
    {
      title: "Casual / Friendly Tone",
      text: "Discover products that make your brand stand out! Barter Media helps you connect, engage, and leave a lasting impression on your audience."
    }
  ];

  return (
  <>
    <div className="banner-section">
  <div className="banner-content">
    <h2>Explore Our Exclusive Products</h2>
    <p>
      Discover a wide range of high-quality products and solutions tailored to your needs. 
      Upgrade your experience with Barter Media.
    </p>
    <button className="banner-btn">Shop Now</button>
  </div>
  <div className="banner-image">
    <img 
      src="/bvid7.avif" 
      alt="Product Banner"
    />
  </div>
</div>

    <div className="productmore-page">
      <h2 className="page-title">All PRODUCTS</h2>
      <div className="product-grid">
        {moreProducts.map((img, i) => (
          <div className="grid-item" key={i}>
            <img src={img} alt={`Product ${i}`} />
          </div>
        ))}
      </div>
    </div>


     <div className="banner-paragraphs">
  {/* Main Heading */}
  <h2 className="banner-main-heading">Why Choose Barter Media?</h2>

  {/* Paragraph Items */}
  {paragraphs.map((p, idx) => (
    <div key={idx} className="paragraph-item">
      <h3>{p.title}</h3>
      <p>{p.text}</p>
    </div>
  ))}
</div>

    </>
  );
};

export default GalleryMore;
