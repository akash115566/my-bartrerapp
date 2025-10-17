
import React from "react";
import "../style/product.css";

const images = [

    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    // "/8.jpeg",
    // "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/12.jpeg",


];

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
  { title: "Learning Kits", desc: "Trade educational kits with peers.", image: "/Learning Kits.jpeg" },
  { title: "Clothes & Apparel", desc: "Exchange shirts, dresses, or pants.", image: "/Clothes & Apparel.jpeg" },
  { title: "Footwear", desc: "Trade shoes or sandals for different sizes/styles.", image: "/Footwear.jpeg" },
  { title: "Kitchen Utensils", desc: "Swap cooking tools or gadgets.", image: "/Kitchen Utensils.jpeg" },
  { title: "Cookware", desc: "Trade pots, pans, or baking items.", image: "/Cookware.jpeg" },
  { title: "Small Appliances", desc: "Exchange electronics for kitchen or home use.", image: "/Small Appliances.jpeg" },
  { title: "Smart TV", desc: "Exchange or trade your LED, OLED, or Smart TVs easily.", image: "/learn1.jpeg" },
{ title: "Refrigerator", desc: "Swap or trade refrigerators, single or double door, in any condition.", image: "/learn2.jpeg" },
{ title: "Spices", desc: "Trade various kitchen spices, herbs, and condiments with others.", image: "/learn3.jpeg" },
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


const features = [
  { icon: "/fr1.jpeg", title: "Reduce Marketing Costs", desc: "Save big on advertising by leveraging barter media." },
  { icon: "/fr2.jpeg", title: "Reach Target Audience", desc: "Effectively reach your target audience on top channels." },
  { icon: "/fr3.jpeg", title: "Flexible Inventory Usage", desc: "Use your inventory creatively to get media exposure." },
  { icon: "/fr4.jpeg", title: "Access Premium Content", desc: "Promote your brand with top-quality TV content." },
  { icon: "/fr5.jpeg", title: "Measurable ROI", desc: "Track results and ROI for each campaign easily." },
];

const galleryImages = [
  "/cag1.webp","/cag2.webp","/cag3.jpg","/cag4.webp",
  "/cag5.webp","/cag6.webp","/cag7.webp"
];

const testimonials = [
  { quote: "Barter Media helped us reach millions without upfront costs.", author: "Rita kapoor, PMC Pvt Ltd", img: "/client1.jpeg" },
  { quote: "Amazing platform and highly professional team.", author: "Ankur Verma, PQR Enterprises", img: "/client2.jpeg" },
  { quote: "Saved us huge marketing costs and increased visibility.", author: "Mrs Pooja, CEO PMC Creation", img: "/client3.jpeg" },
];

const steps = [
  { img: "/ss1.png", title: "Submit Inventory", desc: "Provide your barter inventory to start the campaign." },
  { img: "/ss2.jpeg", title: "Select Channels", desc: "Choose TV channels and advertising slots." },
  { img: "/ss3.jpeg", title: "Track ROI", desc: "Monitor campaign results and impact." },
];

const campaigns = [
  {
    id: 1,
    title: "IPL Campaign 2025",
    description: "Leveraged IPL advertising to maximize brand exposure during the cricket season through barter media deals."
  },
  {
    id: 2,
    title: "Festive Season Promotion",
    description: "Executed festive campaigns for top brands using barter deals to increase visibility and sales."
  },
  {
    id: 3,
    title: "Digital Marketing Blitz",
    description: "Created high-impact digital campaigns across social media and OTT platforms for multiple clients."
  },
  {
    id: 4,
    title: "Product Launch Event",
    description: "Orchestrated product launch campaigns with strategic barter media placements to maximize reach."
  },
  {
    id: 5,
    title: "Brand Awareness Drive",
    description: "Implemented awareness campaigns that used barter agreements to target specific demographics efficiently."
  }
];

const ProductPage = () => {
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

            {/* 🔹 Infinite Slider */}
            <div className="slider1">
                <div className="slider1-track">
                    {/* images दो बार repeat करेंगे for infinite loop */}
                    {[...images, ...images].map((img, i) => (
                        <img key={i} src={img} alt={`slide-${i}`} />
                    ))}
                </div>
            </div>

            <div className="pro">
                <h1>Barter Product</h1>
            </div>

            {/* Barter Products Divs */}
              <div className="product-texts">
      {barterProducts.map((p, i) => (
        <div className="product-text" key={i}>
          <img
            src={p.image} 
            className="product-video" 
            // autoPlay 
            // loop 
            // muted 
            // playsInline 
          />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>


             <div className="product-page">

      {/* Banner Section */}
      <section className="product-banner">
        <div className="banner-left">
          <h1>Promote Your Brand on Top Channels</h1>
          <p>Leverage Barter Media to advertise on premium TV channels without upfront cash. Reach millions of viewers effectively.</p>
          <button>Get Started</button>
        </div>
        <div className="banner-right">
          <img src="/bbvid5.avif" alt="Promo Banner" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Key Features</h2>
        <div className="features-container">
          {features.map((f, idx) => (
            <div className="feature-card" key={idx}>
              <img src={f.icon} alt={f.title} />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="gallery-section1">
        <h2>Campaign Gallery</h2>
        <div className="gallery-slider1">
          <div className="slide-track1">
            {galleryImages.concat(galleryImages).map((img, idx) => (
              <div className="slide1" key={idx}>
                <img src={img} alt={`gallery-${idx}`} />
              </div>
            ))}
          </div>
        </div>


        
      </section>
      <section>
            <div className="campaign-text-container1">
      <div className="header2">
        <h2>Campaign Gallery</h2>
        <p>
          Explore some of our most impactful barter media campaigns. From IPL advertising to product launches and festive promotions, see how Barter Media connects brands with the right audience using innovative barter deals.
        </p>
      </div>

      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-item">
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
          </div>
        ))}
      </div>
    </div>
      </section>

      {/* How It Works / Steps */}
      <section className="steps-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          {steps.map((step, idx) => (
            <div className="step-card" key={idx}>
              <img src={step.img} alt={step.title} />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="pro-test2">
  <h2>What Our Clients Say</h2>
        </div>
      </section>
      <section className="testimonials-section2">
      
        <div className="testimonials-container2">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card2" key={idx}>
              <img src={t.img} alt={t.author} />
              <p>"{t.quote}"</p>
              <h4>- {t.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Start Your Campaign Today</h2>
        <button>Get Started</button>
      </section>

    </div>



        </div>
        </>
    );
};

export default ProductPage;

