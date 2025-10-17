import React from "react";
import "../style/tvshow.css";

const benefits = [
  "Reduce Marketing Costs",
  "Reach Target Audience Effectively",
  "Flexibility in Inventory Usage",
  "Access Premium Content without Cash",
  "Measurable ROI",
];

const services = [
  {
    title: "Spot Ads",
    desc: "30-60 sec ads on popular TV shows to reach mass audience.",
  },
  {
    title: "Brand Integration",
    desc: "Seamless integration of your brand into the storyline.",
  },
  {
    title: "Celebrity Endorsements",
    desc: "Promote your product with top celebrities in shows.",
  },
  {
    title: "Cross-media Campaigns",
    desc: "TV + Digital campaigns for maximum reach and engagement.",
  },
];
const testimonials = [
  {
    quote:
      "Barter Media helped us reach our target audience effectively without any upfront cash.",
    author: "Rita kapoor, Marketing Head PMC Enterprises",
  },
  {
    quote:
      "Highly professional team and amazing results on our TV campaigns.",
    author: "Ankur banshal, Director PMC Enterprises",
  },
  {
    quote:
      "Their barter system saved us huge marketing costs and increased brand visibility.",
    author: " Pooja Sharma, CEO Pooja Movie Creations Enterprises",
  },
];


const tvImages = [
  "/Gallery-1.jpeg",
  "/Gallery-2.jpeg",
  "/Gallery-3.jpeg",
  "/Gallery-4.jpeg",
  "/Gallery-5.jpeg",
  "/Gallery-6.jpeg",
  "/Gallery-7.jpeg",
  "/Gallery-8.jpeg",
  "/Gallery-1.jpeg",
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
  "/Gallery-21.jpeg",
  "/Gallery-22.jpeg",
  "/Gallery-23.jpeg",
  "/Gallery-24.jpeg",


];

const TvShowPage = () => {
  return (
    <>
      <div className="tvshow-page">
        {/* Banner */}
        <section className="tvshow-banner">
          {/* Left Side Text */}
          <div className="banner-left">
            <h1>Top TV Shows on PMC Barter Media</h1>
            <p>
              Discover trending TV shows and binge-worthy series. Stay updated and
              entertained with our curated TV content.
            </p>
            <button>Explore Shows</button>
          </div>

          {/* Right Side Video */}
          <div className="banner-right">
            <video autoPlay loop muted playsInline>
              <source src="/bbvid8.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Horizontal Images */}
        <div className="tv-section">
          <h1 className="tv-section-heading">OUR TV SHOWS</h1>  {/* Top heading */}

          <div className="tv-images">
            {tvImages.map((img, i) => (
              <div className="tv-card" key={i}>
                <img src={img} alt={`tvshow-${i}`} />
              </div>
            ))}
          </div>
        </div>

      </div>


      <div className="barter-services">
        <h2 className="barter-services-heading">Our Barter Media Services</h2>  {/* Top heading */}
        {services.map((service, idx) => (
          <div className="service-card1" key={idx}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>


<div className="barter-benefits">
  <div className="benefits-image">
    <img 
      src="/tvs1.webp" 
      alt="Barter Media Advertising" 
      style={{ filter: "blur(1px)" }} // blur amount yahan change kar sakte ho
    />
  </div>

  <div className="benefits-content">
    <h2>Benefits of Advertising with Barter Media</h2>
    <ul>
      {benefits.map((b, idx) => (
        <li key={idx}>{b}</li>
      ))}
    </ul>
  </div>
</div>




      <section>
        <div className="barter-test">
          <h2>What Our Clients Say</h2>
        </div>
      </section>
      <div className="barter-testimonials">

        {testimonials.map((t, idx) => (
          <div className="testimonial-card1" key={idx}>
            <p>"{t.quote}"</p>
            <h4>- {t.author}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default TvShowPage;
