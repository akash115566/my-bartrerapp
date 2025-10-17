import React from "react";
import "./Ottmore.css";
import { Link } from "react-router-dom";

const images = [
  { src: "/ott/ott1.jpeg", title: "Netflix", text: "Stream your favorite shows." },
  { src: "/ott/ott2.jpeg", title: "Amazon Prime", text: "Exclusive movies & series." },
  { src: "/ott/ott3.jpeg", title: "Disney+ Hotstar", text: "Sports, movies & more." },
  { src: "/ott/ott4.jpeg", title: "Sony Liv", text: "Entertainment redefined." },
  { src: "/ott/ott5.jpeg", title: "Zee5", text: "Indian stories that inspire." }
];

const Ottmore = () => {
  return (
    <div className="ottmore-page">
      {/* Banner */}
      <section className="ott-banner">
        <div className="banner-text">
          <h1>OTT Platforms Advertising</h1>
          <p>
            Promote your brand across the most popular OTT platforms with engaging
            campaigns and reach millions of viewers worldwide.
          </p>
        </div>
        <div className="banner-video">
          <video autoPlay muted loop>
            <source src="/ott/ott-banner.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Main Content */}
      <div className="ott-main">
        <h2 className="ott-heading">Top OTT Partners</h2>
        <div className="ott-link">
          <Link to="/ott-partners">View All Platforms</Link>
        </div>

        <div className="ott-gallery">
          {images.map((item, index) => (
            <div className="ott-card" key={index}>
              <img src={item.src} alt={item.title} />
              <div className="ott-overlay">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ottmore;
