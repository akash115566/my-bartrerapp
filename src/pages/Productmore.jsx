import React from 'react'
import "../style/productmore.css"


const barterProducts = [
  // { title: "Fresh Vegetables", desc: "Trade fresh vegetables for fruits, grains, or other healthy items.", image: "/bbb1.jpg" },
  // { title: "Fruits", desc: "Exchange seasonal fruits with neighbors or friends.", image: "/bbb2.jpg" },
  // { title: "Dairy Products", desc: "Barter milk, cheese, yogurt, or other dairy essentials.", image: "/bbb3.jpg" },
  // { title: "Eggs", desc: "Trade fresh eggs for grains, veggies, or handmade items.", image: "/bbb4.jpg" },
  { title: "Grains", desc: "Swap rice, wheat, or oats for other kitchen essentials.", image: "/grains.jpeg" },
  { title: "Handmade Crafts", desc: "Exchange your unique crafts for décor or collectibles.", image: "/homemade.jpeg" },
  { title: "Pottery Items", desc: "Trade pottery for home decoration or functional items.", image: "/Pottery Items.jpeg" },
  { title: "Knitted Clothes", desc: "Swap scarves, sweaters, or handmade clothing.", image: "/Knitted Clothes.jpeg" },
  { title: "Wooden Toys", desc: "Trade toys with other children-friendly items.", image: "/Wooden Toys.jpeg" },
  { title: "Home Décor Items", desc: "Barter decorative items for your living space.", image: "/Home Décor Items.jpeg" },
  // { title: "Story Books", desc: "Swap books with friends to promote reading.", image: "/bbb11.jpg" },
  // { title: "Educational Books", desc: "Trade textbooks, learning kits or study material.", image: "/bbb12.jpg" },
  //  { title: "Stationery Items", desc: "Exchange pens, notebooks, and other stationery.", image: "/bbb13.jpg" },
  { title: "Art Supplies", desc: "Swap paints, brushes, or crafting tools.", image: "/Art Supplies.jpeg" },
  { title: "Learning Kits", desc: "Exchange fun educational kits and learning materials with others.", image: "/Learning Kits.jpeg" },
  { title: "Clothes & Apparel", desc: "Exchange shirts, dresses, pants, jackets, and fashion items easily.",   image: "/Clothes & Apparel.jpeg" },
  { title: "Footwear", desc: "Trade shoes or sandals for different sizes/styles.", image: "/Footwear.jpeg" },
  { title: "Kitchen Utensils", desc: "Swap useful cooking tools, pans, gadgets, and kitchen items easily.", image: "/Kitchen Utensils.jpeg" },
  { title: "Cookware", desc: "Trade pots, pans, baking items, and kitchen essentials.",  image: "/Cookware.jpeg" },
  { title: "Small Appliances", desc: "Exchange electronics for kitchen or home use.", image: "/Small Appliances.jpeg" },
  { title: "Smart TV", desc: "Exchange or trade your LED, OLED, or Smart TVs easily.", image: "/learn1.jpeg" },
  { title: "Refrigerator", desc: "Swap or trade refrigerators, single or double door, in any condition.", image: "/learn2.jpeg" },
  { title: "Spices", desc: "Trade various kitchen spices, and condiments with others.", image: "/learn3.jpeg" },
  { title: "Sofa", desc: "Exchange your old or extra sofas for new furniture or essentials.", image: "/Sofa.webp" },
  { title: "Dry Fruits", desc: "Trade almonds, cashews, raisins, and other dry fruits.", image: "/Dry Fruits.jpeg" },
  { title: "Tails", desc: "Swap decorative tails or animal-themed items with others.", image: "/tails.jpeg" },
  { title: "Scoty", desc: "Exchange or barter scooters in good condition easily.", image: "/Scoty.jpeg" },
  { title: "Bulb", desc: "Trade LED bulbs or light fixtures for home use.", image: "/Bulb.jpeg" },
  { title: "Flote", desc: "Swap floats, pool accessories, or inflatable toys.", image: "/Flote.jpeg" },
  { title: "Toothbrush", desc: "Exchange toothbrushes or dental hygiene products.", image: "/Toothbrush.jpeg" },
  { title: "Mustard Oils", desc: "Trade mustard oils or other cooking oils for kitchen use.", image: "/Mustard Oils.jpeg" },
  { title: "Beetroot", desc: "Exchange fresh beetroot or other vegetables.", image: "/beetroot.jpeg" },
  { title: "Hair Wax", desc: "Trade grooming or hairstyling products like hair wax.", image: "/Hair Wax.jpeg" },
  { title: "Fortune Product", desc: "Exchange or barter Fortune brand grocery or oil products.", image: "/Fortune Product.jpeg" },
  { title: "Soap Product", desc: "Trade bath soaps or hygiene-related products.", image: "/Soap Product.jpeg" },
  { title: "Office", desc: "Exchange office supplies, furniture, or equipment.", image: "/Office.jpeg" },
  { title: "Shallow Pen", desc: "Swap pens, stationery, or writing accessories.", image: "/Shallow Pen.jpeg" },
  { title: " Dishwash Liquid", desc: "Trade eco-friendly dishwash liquids or cleaning products.", image: "/Beco Dishwash Liquid.jpeg" },
  { title: "Herbal Product", desc: "Exchange herbal or Ayurvedic personal care items.", image: "/Herbal Product.jpeg" },
  { title: "Giffy Dishwash", desc: "Swap Giffy brand dishwash liquids or cleaning items.", image: "/Giffy Dishwash.jpeg" },
  { title: "Scrub Pad", desc: "Trade kitchen scrub pads or cleaning tools.", image: "/Scrub Pad.jpeg" },
  { title: "Property", desc: "Exchange or list property, land, or rental deals for barter.", image: "/Property.jpeg" },
  { title: "Juices", desc: "Trade fruit juices, beverages, or packaged drinks.", image: "/Juices.jpeg" },
  { title: "Paints", desc: "Swap paints, brushes, or hardware tools for home projects.", image: "/Paints.jpeg" },
  { title: "Laptop", desc: "Exchange laptops, tablets, or related accessories.", image: "/Laptop.jpeg" },
  { title: "Shampoo", desc: "Trade haircare products like shampoo and conditioner.", image: "/Shampoo.jpeg" },
  { title: "Beard Softener", desc: "Exchange beard care and grooming products.", image: "/Beard Softener1.jpeg" },


];



const Productmore = () => {
  return (
    <>
      <div className="product-page">
        {/* 🔹 Banner */}
        <section className="product-banner">
          {/* Left Side Text */}
          <div className="banner-left">
            <h1>Our Products</h1>
            <p>
              Discover innovative products from PMC Barter Media.
              Boost your business with our exclusive offerings and leverage
              barter solutions to grow efficiently.
            </p>
            <button>Explore Products</button>
          </div>

          {/* Right Side Video */}
          <div className="banner-right">
            <video autoPlay loop muted playsInline>
              <source src="/bbvid7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>


        <div className="pro1">
          <h1>Barter Product</h1>
        </div>

        {/* Barter Products Divs */}
        <div className="product-texts1">
          {barterProducts.map((p, i) => (
            <div className="product-text1" key={i}>
              <img
                src={p.image}
                className="product-image1"

              />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>




        <div className="productmore-page">
          {/* Hero Section */}
          <header className="hero-banner">
            <h1>Explore More Barter Products</h1>
            <p>Find amazing items and exchange them within your community.</p>
          </header>

          {/* Categories */}
          <section className="categories">
            <h2>Product Categories</h2>
            {/* Grid of categories */}
          </section>

          {/* Featured Products */}
          <section className="featured">
            <h2>Featured Barter Items</h2>
            {/* Cards / Slider */}
          </section>

          {/* How It Works */}
          <section className="how-it-works">
            <h2>How Barter Works</h2>
            {/* Steps */}
          </section>

          {/* Benefits */}
          <section className="benefits">
            <h2>Why Barter?</h2>
            {/* Icons + text */}
          </section>

          {/* Testimonials */}
          <section className="testimonials">
            <h2>What People Say</h2>
            {/* Testimonials list */}
          </section>

          {/* FAQ */}
          <section className="faq">
            <h2>Frequently Asked Questions</h2>
            {/* Q/A */}
          </section>

          {/* CTA */}
          <section className="cta">
            <h2>Start Your Barter Journey</h2>
            <button>Browse Products</button>
          </section>
        </div>

      </div>


    </>
  )
}

export default Productmore
