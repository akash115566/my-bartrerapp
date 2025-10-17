// import React from "react";
// import "../style/about.css"


// const About = () => {
//   return (
//     <section className="about">
//       <div className="about-content">
//         <h2>About Us</h2>
         
// <p>
//  Advertise with your products / services instead cash !

// PMC BARTER MEDIA  was established in 2012, with an objective of providing an
// organized platform for Reciprocal Trade ( Barter )  to the Indian Corporate World.
// PMC BARTER MEDIA acts as a centralized Trading Hub for businesses to transact 
// (buy & sell) goods and services on a Reciprocal Trade basis; that is "an arrangement
// between two parties whereby their roles as seller and buyer are interchangeable,
// each buys from and sells to the other".

// Through its unique concept of Reciprocal Trade ( Barter ) , PMC BARTER MEDIA
// enables businesses to leverage their own goods and services to make purchases 
// without having to spend cash. It reduces costs, reduces cash outflow, increases 
// sales and enhances purchasing power for its clients. PMC BARTER MEDIA helps
// its clients to tap the unrealized potential in their businesses, it  helps utilize spare 
// capacity, enhance productivity and optimize overall business performance.

// PMC BARTER MEDIA provides a unique
// Nationwide B2B Platform for businesses to transact (buy & sell) goods and services.

// PMC BARTER MEDIA clients include some of the country's leading brands in FMCG, 
// Electronics, Appliances, Apparels, Media, Entertainment, Real Estate, Construction,
// Interiors, Airlines, Hospitality, Healthcare and Wellness ETC.</p>
//       </div>
//       <div className="about-image">
//         <img src={aboutImg} alt="About" />
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import { Link } from "react-router-dom";
import "../style/about.css"


  const services = [
    { title: "TV & OTT Campaigns", icon: "📺" },
    { title: "Digital Marketing", icon: "💻" },
    { title: "Social Media Amplification", icon: "📱" },
    { title: "Barter Brand Collaborations", icon: "🤝" },
  ];

  const team = [
    { name: "Ankur Banshal", role: "Creative Director", img: "team1.jpg" },
    { name: "Ankur Banshal", role: "Media Strategist", img: "team2.jpg" },
    { name: "Ankur Banshal", role: "Campaign Manager", img: "team3.jpg" },
  ];

const About = () => {
  return (
    <> <section className="banner">
      {/* Left Side Text */}
      <div className="banner-left">
        <h1>Barter Media</h1>
        <p>
          Advertise your products & services without spending cash! 
          Leverage your resources to boost business growth across India.
        </p>
        <button>Get Started</button>
      </div>

      {/* Right Side Video */}
      <div className="banner-right">
        <video autoPlay loop muted playsInline>
          <source src="/bbvid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    
         <section className="about1">
       <div className="about-content1">
     <div className="about-head2">   {/* <h2>About Us</h2> */}
      <h1>About Page</h1></div> 
      <p>PMC BARTER MEDIA  was established in 2012, with an objective of providing an
organized platform for Reciprocal Trade ( Barter )  to the Indian Corporate World.
PMC BARTER MEDIA acts as a centralized Trading Hub for businesses to transact 
(buy & sell) goods and services on a Reciprocal Trade basis; that is "an arrangement
between two parties whereby their roles as seller and buyer are interchangeable,
each buys from and sells to the other".

Through its unique concept of Reciprocal Trade ( Barter ) , PMC BARTER MEDIA
enables businesses to leverage their own goods and services to make purchases 
without having to spend cash. It reduces costs, reduces cash outflow, increases 
sales and enhances purchasing power for its clients. PMC BARTER MEDIA helps
its clients to tap the unrealized potential in their businesses, it  helps utilize spare 
capacity, enhance productivity and optimize overall business performance.

PMC BARTER MEDIA provides a unique
Nationwide B2B Platform for businesses to transact (buy & sell) goods and services.

PMC BARTER  include some of the country's leading brands in FMCG, 
Electronics, Appliances, Apparels, Media, Entertainment, Real Estate, Construction,
Interiors, Airlines, Hospitality, Healthcare and Wellness ETC.</p>
   
      </div>
      <div className="about-image">
        <img src="./earth2.png" alt="About" />
      </div>
      
       </section>
       <section>
             {/* Mission & Vision */}
             <div className="about-head">
              <h2>About Information</h2>
             </div>
      <div className="about-section1">
        <div className="about-sec">
        <h2>Our Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> Empower businesses to leverage products and
          services effectively without cash,<br/> boosting growth and efficiency.<br />
          <strong>Vision:</strong> Become India's most trusted B2B Barter Media
          platform, connecting businesses <br/>nationwide and unlocking unrealized potential.
        </p></div>
        <div className="about-img">
          <img src="/about2.png" />
        </div>
      </div>

      {/* Core Values */}
      <div className="about-section1">
          <div className="about-sec">
        <h2>Our Core Values</h2>
        <ul>
          <li>Trust & Transparency</li>
          <li>Innovation & Creativity</li>
          <li>Customer-Centric Approach</li>
          <li>Efficiency & Optimization</li>
          <li>Nationwide Network</li>
        </ul>
      </div>
      <div className="about-img">
          <img src="/about3.png" />
        </div>
      </div>

      {/* Services */}
      <div className="about-section1">
          <div className="about-sec">
        <h2>Our Services</h2>
        <ul>
          <li>Reciprocal Trade Platform (Barter)</li>
          <li>Media & Advertising Exchange</li>
          <li>Product & Service Bartering</li>
          <li>Brand Promotion & Marketing</li>
          <li>Consultancy on B2B Optimization</li>
        </ul>
      </div>
      <div className="about-img">
          <img src="/about4.png" />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-section1">
          <div className="about-sec">
        <h2>Why Choose Us</h2>
        <ul>
          <li>No cash required, reduce cash outflow</li>
          <li>Leverage idle inventory & spare capacity</li>
          <li>Nationwide corporate network</li>
          <li>Boost sales and purchasing power</li>
          <li>Centralized hub for easy business transactions</li>
        </ul>
      </div>
      <div className="about-img">
          <img src="/about5.png" />
        </div>
      </div>

      {/* Achievements */}
      <div className="about-section1">
          <div className="about-sec">
        <h2>Achievements & Milestones</h2>
        <ul>
          <li>Established in 2012</li>
          <li>Served 1000+ clients across multiple industries</li>
          <li>Partners with top FMCG, Electronics, Media & Hospitality brands</li>
          <li>Successfully executed numerous barter campaigns</li>
        </ul>
      </div>
      <div className="about-img">
          <img src="/about6.png" />
        </div>
      </div>

    </section>
    <section>
      <div className="testimonials-section3">
  {/* <h2>What Our Clients Say</h2> */}
  {/* <div className="testimonial-card">
    <p>"PMC Barter Media helped us leverage our inventory efficiently. Amazing platform!"
   
    "PMC Barter Media transformed the way we manage our ad campaigns. Very professional team!" – Sneha Mehta, Marketing Head PMC Pvt Ltd

"The barter system saved us huge costs on promotions. Highly recommend their services." – Ankur Verma, Director PQR Enterprises</p>
 <h4>- Mrs Pooja, CEO pooja movie creation pvt. Ltd</h4>
  </div> */}
  {/* More testimonials */}
</div>
    </section>
    <section>
       <h3>More testimonials</h3>
      <div className="stats-section">
       
  <div className="stat-card">
    <h3>1000+</h3>
    <p>Clients Served</p>
  </div>
  <div className="stat-card">
    <h3>500+</h3>
    <p>Barter Campaigns</p>
  </div>
  <div className="stat-card">
    <h3>20+</h3>
    <p>Cities Covered</p>
  </div>
</div>
    </section>
    <section>
      <div className="faq-section1">
  <h2>Frequently Asked Questions</h2>
  <details>
    <summary>How does Barter Media work?</summary>
    <p>We provide a platform where businesses can exchange goods and services without cash.</p>
  </details>
  <details>
    <summary>Is there any fee to join?</summary>
    <p>Yes, we have a nominal subscription for corporate members.</p>
  </details>
</div>
    </section>

    <section><div className="cta-section">
  <h2>Ready to Boost Your Business?</h2>
 <Link to="/contact"> <button>Contact Us Today</button></Link>
</div></section>


    <div className="ad-about-container">
      {/* Hero */}
      <header className="ad-about-hero">
        <h1>Advertising Excellence with Barter Media</h1>
        <p>Transforming your brand’s reach through innovative advertising strategies.</p>
      </header>

      {/* Who We Are */}
      <section className="ad-who-we-are">
        <h2>Who We Are</h2>
        <p>Barter Media is your strategic partner in advertising, delivering campaigns that reach millions while maximizing ROI and engagement.</p>
      </section>

      {/* Our Approach */}
      <section className="ad-approach">
        <h2>Our Approach</h2>
        <p>We combine creativity, analytics, and media expertise to design campaigns that resonate with your target audience and generate measurable results.</p>
      </section>

      {/* Services */}
      <section className="ad-services">
        <h2>Our Advertising Services</h2>
        <div className="ad-services-grid">
          {services.map((s, i) => (
            <div className="ad-service-card" key={i}>
              <div className="ad-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="ad-team">
        <h2>Meet Our Advertising Experts</h2>
        <div className="ad-team-grid">
          {team.map((member, i) => (
            <div className="ad-team-card" key={i}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
       
        </>
  );
};

export default About; 
