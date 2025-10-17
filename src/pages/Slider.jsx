import React, { useEffect, useState } from "react";
import "../style/slider.css";
import { Link } from "react-router-dom";




// Slider Images top in page
const images = ["/bb1.jpeg", "/bb2.jpeg", "/bb3.jpeg", "/bb4.jpeg", "/bb5.jpeg"];

//3d slider  entertainment channel
const images2 = [
  "/entertainment/39.jpeg",
  "/entertainment/36.jpeg",
  "/entertainment/42.jpeg",
  "/entertainment/33.jpeg",
  "/entertainment/14.jpeg",
  "/entertainment/26.jpeg",
   "/entertainment/21.jpeg",
    // "/entertainment/8.jpeg",
    //  "/entertainment/9.jpeg",

];


//barter products image
const barterProducts1 = [
   { title: "Grains", desc: "Swap rice, wheat, or oats for other kitchen essentials.", image: "/grains.jpeg" },
  { title: "Handmade Crafts", desc: "Exchange your unique crafts for décor or collectibles.", image: "/homemade.jpeg" },
  { title: "Pottery Items", desc: "Trade pottery for home decoration or functional items.", image: "/Pottery Items.jpeg" },
  { title: "Knitted Clothes", desc: "Swap scarves, sweaters, or handmade clothing.", image: "/Knitted Clothes.jpeg" },
  { title: "Wooden Toys", desc: "Trade toys with other children-friendly items.", image: "/Wooden Toys.jpeg" },
  
];

//ott image top ott channel
const images3 = [
  { src: "/ott14.jpeg", title: "Voot", text: "Advertise on Voot to connect movies offers unmatched reach. Brands can engage viewers through targeted ." },
  { src: "/ott15.jpeg", title: "Jio Star", text: "Advertise on JioCinema viewers. With movies, shows, sports, and originals, brands gain unmatched ."},
  { src: "/ott12.jpeg", title: "Zee5", text: "Advertise on Zee5 to reach a and originals. Brands enjoy impactful visibility, targeted campaigns, and ." },
  { src: "/ott10.jpeg", title: "Sony Liv", text: "Advertise on Sony LIV to, TV shows, and movies. Brands gain targeted exposure, impactful campaigns,." },
  { src: "/ott13.jpeg", title: "Mx Player", text: "Advertise on MX Player t series, TV shows, movies, and music. With targeted campaigns, brands achieve ."}
];


//barter product section   our batter gallery text
  const products = [
    { img: "./Gallery-1.jpeg", title: "Indian Idol", desc:"Indian Idol, India’s biggest singing reality show, showcases incredible voices, heart-touching performances, and inspiring journeys. A platform where dreams meet melodies. Don’t miss !"  },
    { img: "/Gallery-2.jpeg", title: "Bigg Boss", desc: "Bigg Boss, India’s most dramatic reality show,  friendships,  one roof. Entertainment, suspense, and unexpected twists await every night. Stay tuned for the ultimate reality experience!"},
    { img: "/Gallery-3.jpeg", title: "Bhabhi Ji Ghar Par Hai", desc:"Bhabhi Ji Ghar Par Hai, the nation’s favorite comedy show, tickles every funny bone with quirky characters, hilarious situations, and endless laughter. Perfect resist watching every evening!" },
     { img: "/Gallery-4.jpeg", title: "Indai's Got Talent", desc:"Indai's Got Talent, the nation’s favorite comedy show, tickles every funny bone with quirky characters, hilarious situations, and endless laughter. Perfect resist watching every evening!" },

  ];



// Dummy movieChannels data for AutoSlider
const movieChannels = [
  "/mov1.jpeg",
  "/mov2.jpeg",
  "/mov3.jpeg",
  "/mov4.jpeg",
  "/mov5.jpeg",
];
const images1 = [
  "/mov1.jpeg",
  "/mov17.jpeg",
  "/mov9.jpeg",
  "/mov20.jpeg",
  "/mov5.jpeg",
];


// Dummy topNews data
const topNews = [
  { img: "/new1.jpeg", title: "Breaking News 1", text: "Latest update on politics and economy." },
  { img: "/new19.jpg", title: "Breaking News 2", text: "Sports world highlights today." },
  { img: "/new3.jpeg", title: "Breaking News 3", text: "Entertainment buzz and celebrity news." },
  { img: "/new4.jpeg", title: "Breaking News 4", text: "Technology and startup stories." },
  // { img: "/new5.jpeg", title: "Breaking News 5", text: "World news and global issues." },
];

// Simple AutoSlider component (horizontal scroll)
const AutoSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const scrollImages = [...movieChannels, ...movieChannels];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="auto-slider">
      <div
        className="auto-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`movie-${i}`} />
        ))}
      </div>
    </div>
  );
};



//tv channel text and slider

const Slider = () => {
  const [index, setIndex] = useState(0);


  const scrollImages = [...images1, ...images1];

  const features = [
    { title: "Easy Product Bartering", desc: "Swap your items quickly and securely with neighbors or friends.", icon: "🔄" },
    { title: "Community Driven", desc: "Join a network of local users and build trust through bartering.", icon: "🏘️" },
    { title: "Eco-Friendly", desc: "Reduce waste and promote reuse by exchanging your goods.", icon: "🌱" },
    { title: "Secure & Reliable", desc: "Your exchanges are safe with our verified platform.", icon: "🔒" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Image Slider */}
      <div className="slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`} />
          ))}
        </div>
      </div>

      {/* Home Page */}
      <div className="home-page">
        {/* Banner */}
        <section className="home-banner">
          <h1>Welcome to Barter Media</h1>
          <p>Trade your items, connect with your community, and make the world sustainable.</p>
          {/* <button className="cta-btn2"><Link to="/welcomepage"> Get Started</Link></button> */}
        </section>

        {/* Features */}
        <section className="home-features">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </section>


          {/* Barter product */}
          {/* Barter Products Section  css-123*/}
<div className="barter-products-section1">
  {/* Top Heading */}
  <h2 className="barter-heading1">Our Barter Products</h2>

  {/* Product Cards */}
  <div className="product-texts1">
    {barterProducts1.map((p, i) => (
      <div className="product-text1" key={i}>
        <img 
          src={p.image} 
          className="product-video1" 
         
        />
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </div>
    ))}
  </div>

  {/* Bottom Link */}
  <div className="barter-more-link1">
    <Link to="/productmore" className="btn1">View More Products</Link>
  </div>
</div>

           





               {/* OTT SECTION  css-211*/}
         <div className="ott-main2">
        <h2 className="ott-heading2">Top OTT Partners</h2>
       

        <div className="ott-gallery2 css-248">
          {images3.map((item, index) => (
            <div className="ott-card2" key={index}>
              <img src={item.src} alt={item.title} />
              <div className="ott-overlay2">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
         {/* <div className="ott-link">
          <Link to="/ott-partners">View All Platforms</Link>
        </div> */}
      </div>

        
        {/* barter Gallery  Section  css-315*/}
         <div className="products-section1">
      <h2 className="section-title">Our Barter Gallery</h2>
      <div className="product-row">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.title} />
            {/* <div className="overlay1">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className="more-link">
        <Link to="/gallerymore" className="btn">View More Products</Link>
      </div>
    </div>




        {/* About Section */}
        <section className="home-about">
          <h2>About Barter Media</h2>
          <p>
            Barter Media is a platform designed to simplify the exchange of goods.
            Connect with your community, save money, and reduce waste by trading your products safely and efficiently.
          </p>
        </section>
      </div>


      {/*  enterteinment Client Logos & 3d slider css-732 */}
      <section className="clients-section">
        <h2>ENTERTAINMENT ADVERTISE</h2>

        <section className="section3">
            {/* Centered Link */}
 

          <div className="slider3">
            {images2.map((img, index) => (
              <span key={index}>
                <img src={img} alt={`slide-${index}`} />
              </span>
            ))}
          </div>
           <div className="section3-link">
    <Link to="/entermore">View All Clients</Link>
  </div>
        </section>
      </section>



      {/* How It Works css-560 */}
      <section className="how-it-works">
        <h2>How Barter Media Works</h2>
        <div className="steps">
          <div className="step-card">
            <h3>1. List Your Items</h3>
            <p>Upload products or inventory you want to barter with brands or community.</p>
          </div>
          <div className="step-card">
            <h3>2. Find Matches</h3>
            <p>Discover campaigns or users interested in exchanging products or services.</p>
          </div>
          <div className="step-card">
            <h3>3. Execute Barter</h3>
            <p>Complete the exchange securely and track the results efficiently.</p>
          </div>
        </div>
      </section>


      {/* tv  Channels slider  css-1190*/}

      <div className="infinite-slider-section">
        <h2 className="infinite-slider-heading">MOVIE CHANNELS</h2>
       
        <div className="infinite-slider">
          <div className="infinite-track">
            {scrollImages.map((img, idx) => (
              <div className="infinite-slide" key={idx}>
                <img src={img} alt={`slide-${idx}`} />
              </div>
            ))}
          </div>
        </div>

         <div className="infinite-slider-links">
          <Link to="/tvmore" className="infinite-slider-link">
            Popular Channels
          </Link>
        </div>
      </div>
      {/* Movie Channels */}
      {/* <section className="channel-section">
        <h2>MUSIC CHANNELS </h2>
        <AutoSlider images={movieChannels} />
      </section> */}

      {/* Business Channels  css-1369*/}
      <section className="busi1">
        <h2>BUSINESS CHANNELS</h2>
        <div className="business-container">
          <div className="business-card">
            <img src="/busi1.jpeg" alt="Times Now" className="business-image" />
            <h3>TIMES NOW</h3>
            <p>Delivering real-time insights and trusted updates to keep you ahead in a fast-paced world.</p>
          </div>
          <div className="business-card">
            <img src="/busi2.jpeg" alt="CNBC" className="business-image" />
            <h3>CNBC Business</h3>
            <p>Comprehensive coverage of global markets, finance, and economic trends to help you make informed decisions.</p>
          </div>
          <div className="business-card">
            <img src="/busi3.jpeg" alt="Z Business" className="business-image" />
            <h3>Z Business</h3>
            <p>Insights, updates, and analysis on markets, startups, and economic trends to keep you informed and empowered.</p>
          </div>
        </div>
      </section>

      {/* Regional News css-1561 */}
      <section className="regional-news5">
        <h2>REGIONAL NEWS</h2>
        <div className="news-cards5">
          <div className="news-card5">
            <img src="/regi16.jpeg" alt="UP/UK" className="business-image" />
            <h4>NEWS 18 UP/Uttarakhand</h4>
            <p>Get the latest updates, breaking news, and top stories from Uttar Pradesh and Uttarakhand.</p>
          </div>
          <div className="news-card5">
            <img src="/regi22.jpeg" alt="Haryana" className="business-image" />
            <h4>News 18 HARYANA</h4>
            <p>Stay updated with the latest news and stories from Haryana.</p>
          </div>
          <div className="news-card5">
            <img src="/regi10.jpeg" alt="India" className="business-image" />
            <h4>News 18 INDIA</h4>
            <p>Stay informed with the latest national news and updates from across India.</p>
          </div>
          <div className="news-card5">
            <img src="/regi23.jpeg" alt="Punjabi" className="business-image" />
            <h4>News 18 PANJABI</h4>
            <p>Stay connected with the latest news and stories from Punjab.</p>
          </div>
          <div className="news-card5">
            <img src="/regi25.jpeg" alt="MP" className="business-image" />
            <h4>News 18 MADHYA PRADESH</h4>
            <p>Stay updated with the latest news and stories from Madhya Pradesh.</p>
          </div>
        </div>
      </section>

      {/* Top News css-1726*/}
      <section className="top-news-section4">
        <h2>Top 5 News</h2>
       
        <div className="news-cards-container4">
          {topNews.map((news, index) => (
            <div className="news-card4" key={index}>
              <img src={news.img} alt={news.title} />
              <div className="news-text4">
                <h4>{news.title}</h4>
                <p>{news.text}</p>
              </div>
            </div>
          ))}
        </div>
         <div className="news-link">
          <Link to="/newsmore" className="view-all-link1">View All News</Link>
        </div>
      </section>


      <div className="home-page1">
      {/* Hero Banner   css-1902*/}
      <header className="hero1">
        <div className="hero-content1">
          <h1>Welcome to Barter Media</h1>
          <p>
            Your trusted partner in media, advertising, and brand growth. 
            We help businesses maximize visibility across TV, Digital, Print, and OTT.
          </p>
          {/* <button className="cta-btn">Get Started</button> */}
        </div>
      </header>

      {/* About Section ====2032===================*/}
      <section className="about4">
        <h2>About Us</h2>
        <p>
          Barter Media is a leading media solutions company helping brands 
          leverage barter deals to optimize advertising campaigns at minimum costs. 
          Our strong network and expertise ensure maximum visibility for your brand.
          At Barter Media, we believe that advertising should be impactful, smart, and cost-effective. We specialize in barter-based media solutions, where brands can exchange their products or services for advertising space across TV, OTT, Digital, Radio, and Print platforms.

With a strong network of leading media houses and advertising channels, we provide brands with the visibility they deserve — without heavy cash spending. Whether you’re a growing business or an established brand, our barter-driven model helps you maximize your marketing reach while minimizing costs.
        </p>
      </section>

      {/* Services Section===============2056====*/}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card2">
            <h3>TV Advertising</h3>
            <p>Reach millions through top national & regional channels.</p>
          </div>
          <div className="service-card2">
            <h3>Digital Campaigns</h3>
            <p>Engage audiences on Google, Facebook, YouTube & more.</p>
          </div>
          <div className="service-card2">
            <h3>Print Media</h3>
            <p>Advertise in leading newspapers & magazines.</p>
          </div>
          <div className="service-card2">
            <h3>OTT & Radio</h3>
            <p>Reach young audiences with OTT platforms and FM radio.</p>
          </div>
        </div>
      </section>

     

        {/* Center Circular Image==========2172================= */}

        <div className="barter-section">
      <div className="barter-image">
        <img src="/barter1.png" alt="Barter Media" />
      </div>
      <div className="barter-content">
        <h2>Barter Media Advertising: A Win-Win for Brands and Broadcasters</h2>
        <p>
          In today's dynamic advertising landscape, brands are constantly seeking innovative and cost-effective ways to reach their target audiences. 
          Barter media advertising, often overlooked, presents a powerful solution that benefits both advertisers and media owners.
        </p>

        <h3>What is Barter Media Advertising?</h3>
        <p>
          At its core, barter media advertising is a trade agreement where a brand provides goods or services to a media owner 
          (like a TV channel, radio station, or publisher) in exchange for advertising airtime or space. 
          Instead of paying cash for media, the brand "pays" with its products or services.
        </p>

        
      
      </div>
    </div>

      {/* Partners=========2308============= */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src="/cli5.jpeg" alt="partner1" />
          <img src="/cli2.webp" alt="partner2" />
          <img src="/cli3.jpeg" alt="partner3" />
          <img src="/cli4.webp" alt="partner4" />
        </div>
      </section>

      {/* Why Choose Us========2334=========== */}
      <section className="why-choose">
        <h2>Why Choose Barter Media?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Cost Effective</h3>
            <p>Barter your unsold inventory for impactful ad campaigns.</p>
          </div>
          <div className="benefit">
            <h3>Wide Network</h3>
            <p>Strong connections with TV, Print & Digital media.</p>
          </div>
          <div className="benefit">
            <h3>Trusted by Brands</h3>
            <p>Proven record of successful campaigns for top clients.</p>
          </div>
        </div>
      </section>

      {/* Testimonials ==2375=================*/}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-main">
        <div className="testimonial-card">
          <p>"Barter Media helped us save costs and increase reach. Fantastic experience!"</p>
          <h4>- Rajesh Kumar, CEO XYZ Ltd</h4>
        </div>
        <div className="testimonial-card">
          <p>"A game-changer for our marketing campaigns."</p>
          <h4>- Priya Sharma, Marketing Head ABC Ltd</h4>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta1">
        <h2>Ready to Grow Your Brand?</h2>
       <Link to="/contact"> <button className="cta-btn2">Contact Us</button></Link>
      </section>
    </div>


      {/* Benefits=====2485======== */}
      <section className="benefits5">
        <h2>What Makes Barter Media Different?</h2>
        <div className="benefit-cards5">
          <div className="benefit-card5">
            <h3>Save Costs</h3>
            <p>Promote your brand without burning extra cash on marketing campaigns.</p>
          </div>
          <div className="benefit-card5">
            <h3>Wider Reach</h3>
            <p>Get access to new customers through collaborative barter campaigns.</p>
          </div>
          <div className="benefit-card5">
            <h3>Sustainable Growth</h3>
            <p>Reduce waste and contribute to a more eco-friendly business model.</p>
          </div>
        </div>
      </section>

      {/* Testimonials===2520========== */}
      <section className="testimonials">
        <h2>Clients Feedback</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card1">
            <p>"Barter Media helped our brand reach more people without extra marketing spend!"</p>
            <h4>- Rita Sharma, Marketing Head</h4>
          </div>
          <div className="testimonial-card1">
            <p>"The platform is simple and effective. Great barter experience!"</p>
            <h4>- Pooja Sharma, CEO PMC Pvt Ltd.</h4>
          </div>
          <div className="testimonial-card1">
            <p>"We saved thousands on promotions while growing our audience organically."</p>
            <h4>- Ankur Banshal, Brand Manager</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;

