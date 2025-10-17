import React from 'react'
import { Link } from 'react-router-dom';
import "../style/whatwe.css";

const Whatwe = () => {
  const images = [
    "/cli3.jpeg",
    "/cli5.jpeg",
    "/cli6.jpeg",
    "/cli11.jpeg",
    "/cli12.jpeg",
    "/cli13.jpeg",
      
];


 const services = [
    { title: "TV & OTT Advertising", icon: "📺", desc: "Reach millions through TV and OTT campaigns." },
    { title: "Digital Campaigns", icon: "💻", desc: "Targeted online marketing for maximum impact." },
    { title: "Social Media Promotions", icon: "📱", desc: "Engage audiences on Instagram, Facebook & more." },
    { title: "Barter Brand Collaborations", icon: "🤝", desc: "Leverage barter deals to maximize ROI." },
    { title: "Analytics & Tracking", icon: "📊", desc: "Measure campaign performance & optimize results." },
  ];

  const steps = [
    { step: "Plan", desc: "Understand brand goals and target audience." },
    { step: "Create", desc: "Design impactful campaigns & creatives." },
    { step: "Deploy", desc: "Launch campaigns across multiple channels." },
    { step: "Measure", desc: "Track performance and engagement." },
    { step: "Optimize", desc: "Improve campaigns based on insights." },
  ];

  return (
   <>
   <section className="whatwedo-banner">
      {/* Left Side Text */}
      <div className="banner-left">
          <h2>अब मुफ्त प्रचार करें!</h2>
          <p>
            अपने उत्पाद और सेवाओं का प्रचार **PMC BARTER MEDIA** के साथ करें  
            और बिना नकद खर्च किए अपने व्यवसाय को बढ़ाएँ।  
            हमारे माध्यम से देश भर में अपने व्यापार का विस्तार करें।
          </p>
          <button>अभी शुरुआत करें</button>
        </div>
        

      {/* Right Side Video */}
      <div className="banner-right">
        <video autoPlay loop muted playsInline>
          <source src="/bbvid4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
   <div className="container1">
    <div className="top-head1">
        <h1>WHAT WE DO</h1>
    </div>
    <div className="main">
        <div className="main-left">
             <img src="./bb9.jpeg" alt="About" />
        </div>
        <div className="main-right">
            <p>PMC BARTER MEDIA has grown at an unprecedented rate to now firmly cement its
position as India's leading "Reciprocal Trade Company". It has been consistently
creating value for its clients and has  the last 13 years. 
Our growth indicates the success of our trading model and our record of nearly 100%
client retention is the strongest testimony to the trust and faith that we enjoy with our clients.</p>

  <div className="right-grid">
    <div className="right-grid-number">
         <h3>BENEFITS OF PMC BARTER  MEDIA:</h3>
  <ol className="benefits-list">
    <li>Reduce Costs</li>
    <li>Preserve Cash</li>
    <li>Incremental Sales</li>
    <li>Enhance Purchasing Power</li>
    <li>Utilize Spare Capacity</li>
    <li>Move Excess Inventory</li>
    <li>Enhance Productivity</li>
    <li>Preferred Platform for Purchases</li>
    <li>Additional Channel of Sales</li>
    <li>Optimize Business Performance</li>
  </ol>
</div>
    <div className="right-grid-dot">
         <h3>OUR TV MEDIA SOLUTION IN INDIA INCLUDE</h3>
  
  <ul className="benefits-list1">
    <li>TV MEDIA</li>
    <li>TV SHOWS</li>
    <li>CELEBRITY</li>
    <li>PVR</li>
    <li>OTT</li>
    <li>Cinema</li>
    <li>Advertising MAKING</li>
  </ul>
</div>
  </div>
   <h6>
<span>NOTE </span>: We work across all media platforms as per specific client requirement. 
All media is available subject to media approval & inventory of media available.
Also we buy products on stock lot basis for trading purpose as well.</h6>
 
        </div>
      

    </div>

   </div>
    {/* Services Grid */}
<section className="services-section">
  <h2>Our Services</h2>
  <div className="services-grid">
    <div className="service-card1">
      <h3>Barter Exchange</h3>
      <p>Grow your business without spending cash and fully utilize your resources.</p>
    </div>
    <div className="service-card1">
      <h3>Media Promotion</h3>
      <p>Promote your business on TV, OTT, Print, and Social Media platforms.</p>
    </div>
    <div className="service-card1">
      <h3>Advertising</h3>
      <p>Customized advertising solutions for your business.</p>
    </div>
    <div className="service-card1">
      <h3>Consultancy</h3>
      <p>Assistance in B2B optimization and trading strategy.</p>
    </div>
  </div>
</section>

{/* Client Logos */}
<section className="clients-section">
  <h2>Our Clients</h2>
  {/* <div className="clients-logos">
    <img src="bvid2.avif" alt="Client 1" />
    <img src="bvid2.avif" alt="Client 2" />
    <img src="bvid2.avif" alt="Client 3" />
    <img src="bvid2.avif" alt="Client 4" />
  </div> */}
  
            <section className="section3">

                <div className="slider3">
                    {images.map((img, index) => (
                        <span key={index}>
                            <img src={img} alt={`slide-${index}`} />
                        </span>
                    ))}
                </div>
            </section>
</section>

{/* Case Studies */}
<section className="case-section">
  <h2>Success Stories</h2>
  <div className="case-grid">
    <div className="case-card">
      <h3>Client A</h3>
      <p>We helped Client A generate 30% more revenue through our barter model.</p>
    </div>
    <div className="case-card">
      <h3>Client B</h3>
      <p>Client B gained national exposure without spending any cash.</p>
    </div>
    <div className="case-card">
      <h3>Client C</h3>
      <p>Brand visibility and audience engagement were both significantly increased.</p>
    </div>
  </div>
</section>

{/* Statistics */}
<section className="stats-section1">
  <h2>Key Statistics</h2>
  <div className="stats-grid">
    <div className="stat-card">
      <h3>13+</h3>
      <p>Years of Experience</p>
    </div>
    <div className="stat-card">
      <h3>1000+</h3>
      <p>Clients Served</p>
    </div>
    <div className="stat-card">
      <h3>50+</h3>
      <p>Cities Covered</p>
    </div>
    <div className="stat-card">
      <h3>500+</h3>
      <p>Successful Campaigns</p>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-card">
    <h3>What is Barter Media?</h3>
    <p>It’s a platform where businesses can exchange goods and services without spending cash.
      A brand wants to advertise but also has products or services.

A barter media agency helps the brand trade those products with media companies (TV, radio, digital, print).

The brand gets advertising space; the media gets usable products or resale value.

Everyone saves cash — that’s the benefit.
    </p>
  </div>
  <div className="faq-card">
    <h3>How to get started?</h3>
    <p>Register with us and list your products or services on our platform.
      You exchange goods or services (not cash) for media ad space.

Your profit comes from valuing and trading smartly — you buy media at barter rates and resell to clients.
    </p>
  </div>
</section>

{/* Call To Action */}
<section className="cta-section">
  <h2>Get Started Today</h2>
  <p>Take your business to the next level with PMC Barter Media.</p>
  <Link to="/contact"><button>Get Started</button></Link>
</section>



 <div className="wwd-container">
      {/* Hero */}
      <header className="wwd-hero">
        <h1>Discover How We Amplify Your Brand</h1>
        <p>Barter Media creates innovative advertising solutions to maximize reach and ROI.</p>
      </header>

      {/* Services Section */}
      <section className="wwd-services">
        <h2>Our Core Services</h2>
        <div className="wwd-services-grid">
          {services.map((s, i) => (
            <div className="wwd-service-card" key={i}>
              <div className="wwd-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="wwd-steps">
        <h2>How It Works</h2>
        <div className="wwd-steps-grid">
          {steps.map((s, i) => (
            <div className="wwd-step-card" key={i}>
              <h3>{s.step}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

   
   </>
  )
}

export default Whatwe
