import React from "react";
import "../style/channel.css";
import { Link } from "react-router-dom"

// const showsChannels = ["/bvid2.avif", "/bvid2.avif", "/bvid2.avif", "/bvid2.avif"];
const newsChannels = ["/new1.jpeg", "/new19.jpg", "/new3.jpeg", "/new4.jpeg", "/new5.jpeg",
  "/new6.jpeg", "/new7.jpeg", "/new8.jpeg", "/new9.jpeg", "/new10.jpeg", "/new11.jpeg", "/new1.jpeg"];
const images = [
  "/mov1.jpeg",
  "/mov17.jpeg",
  "/mov3.jpeg",
  "/mov14.png",
  "/mov5.jpeg",
  "/mov3.jpeg",
];

const movieChannels = ["/mus1.jpeg", "/mus2.jpeg", "/mus3.jpeg", "/mus4.jpeg", "/mus5.jpeg"];

// zee news

const topNews = [
  {
    img: "/zee1.jpeg",
    title: "Breaking: Zee News UP/UK Updates",
    text: "Latest updates, breaking news, and exclusive reports from Uttar Pradesh and Uttarakhand."
  },
  {
    img: "/zee2.jpeg",
    title: " Breaking:Zee News Delhi & Haryana",
    text: "Breaking news, latest updates, and live reports from Delhi and Haryana."
  },
  {
    img: "/zee3.jpeg",
    title: "Breaking:Zee News MP & Chhattisgarh",
    text: "Get breaking news, latest updates, and live reports from Madhya Pradesh and Chhattisgarh."
  },
  {
    img: "/zee4.jpeg",
    title: "Breaking:Zee News Punjab & Himachal",
    text: "Breaking news, live updates, and exclusive reports from Punjab and Himachal Pradesh."
  },
  {
    img: "/zee5.jpeg",
    title: "Breaking:Zee News Rajasthan",
    text: "Breaking news, live updates, and exclusive reports from Rajasthan."
  },
];

const channels = [
  {
    name: "Zee News",
    category: "News",
    reach: "5M+ Viewers",
  
    image: "/new4.jpeg",
    description: "Zee News is one of India's leading news channels, offering high visibility for targeted advertising.",
  },
  {
    name: "Sony Entertainment",
    category: "Entertainment",
    reach: "7M+ Viewers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Sony_Entertainment_TV_Logo.svg",
    image: "/ott7.jpeg",
    description: "Sony Entertainment provides a wide audience base for brand campaigns across drama, reality, and kids shows.",
  },
  {
    name: "JioHot Star",
    category: "Sports",
    reach: "10M+ Viewers",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/11/Star_Sports_logo.svg",
    image: "/ott2.jpeg",
    description: "Star Sports is ideal for brands targeting sports enthusiasts, with high engagement during live matches.",
  },
];


const AutoSlider = ({ images }) => {
  return (
    <div className="auto-slider">
      <div className="slide-track">
        {images.concat(images).map((src, i) => (
          <div className="slide" key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Channel = () => {
  return (
    <>
      {/* Top Banner with Left Text & Right Video */}
      <section className="channel-banner">
        <div className="banner-left">
          <h1>Our Channel Partners</h1>
          <p>
            Explore TV News, Shows, and Movie Channels with PMC Barter Media.
            Promote your brand across top Indian channels.
          </p>
          <button>Get Started</button>
        </div>

        <div className="banner-right">
          <video autoPlay loop muted playsInline>
            <source src="/bbvid3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* TV News Channels */}
      <section className="channel-section">
        <h2>TV NEWS CHANNELS</h2>
        <AutoSlider images={newsChannels} />
      </section>

      {/* TV Shows Channels */}
      {/* <section className="channel-section">
                <h2>TV Shows Channels</h2>
                <AutoSlider images={showsChannels} />
            </section> */}
      <section className="tv1">
        <h1>TV MOVIE CHANNELS ADVERTISE</h1>
       
      </section>

      <section className="section2">

        <div className="slider2">
          {images.map((img, index) => (
            <span key={index}>
              <img src={img} alt={`slide-${index}`} />
            </span>
          ))}
        </div>
        <div className="tv1">
               <h4>
          <Link
            to="/service/tvmovie"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            MORE INFORMATION
          </Link>
        </h4>
        </div>
      </section>

      {/* Movie Channels */}
      <section className="channel-section">
        <h2>MUSIC CHANNELS </h2>
        <AutoSlider images={movieChannels} />
      </section>

      <section className="busi1">
        <h2>BUSINESS CHANNELS</h2>
        <div className="business-container">

          {/* First div */}
          <div className="business-card">
            <img src="/busi1.jpeg" alt="Z Business" className="business-image" />
            <h3>TIMES NOW</h3>
            <p>Delivering real-time insights and trusted updates to keep you ahead in a fast-paced world.</p>
          </div>

          {/* Second div */}
          <div className="business-card">
            <img src="/busi2.jpeg" alt="Z Business" className="business-image" />
            <h3>CNBC Business</h3>
            <p>Comprehensive coverage of global markets, finance, and economic trends to help you make informed decisions.</p>
          </div>

          {/* Third div */}
          <div className="business-card">

            <img src="/busi3.jpeg" alt="Z Business" className="business-image" />
            <h3>Z Business</h3>
            <p>Insights, updates, and analysis on markets, startups, and economic trends to keep you informed and empowered.</p>
          </div>
        </div>
      </section>
      <section>
        {/* comment */}
        <div className="regional-news">
          <h2>REGIONAL NEWS</h2>
          <div class="news-cards">
            <div className="news-card">
              <img src="/regi16.jpeg" alt="Z Business" className="business-image" />
              <h4> NEW 18 UP/UTRKHAND</h4>
              <p>Get the latest updates, breaking news, and top stories from Uttar Pradesh and Uttarakhand, covering politics, and local events.</p>
            </div>
            <div className="news-card">
              <img src="/regi22.jpeg" alt="Z Business" className="business-image" />
              <h4>News 18 HARYANA</h4>
              <p>Stay updated with the latest news, events, and stories from Haryana, covering politics, business, sports, and local happenings.</p>
            </div>
            <div className="news-card">
              <img src="/regi10.jpeg" alt="Z Business" className="business-image" />
              <h4>News 18 INDIA</h4>
              <p>Stay informed with the latest national news, breaking stories, and updates from across India,  business, sports, and culture.</p>
            </div>
            <div className="news-card">
              <img src="/regi23.jpeg" alt="Z Business" className="business-image" />
              <h4>News 18 PANJABI</h4>
              <p>Stay connected with the latest news, updates, and stories from Punjab, covering politics, culture, business, and local events.</p>
            </div>
            <div className="news-card">
              <img src="/regi25.jpeg" alt="Z Business" className="business-image" />
              <h4>News 18 MEDYAPRADESH</h4>
              <p>Stay updated with the latest news, events, and stories from Madhya Pradesh, covering politics, culture, business, and local happenings.</p>
            </div>
          </div>
        </div>

      </section>

      <section className="top-news-section3">
        <h2>Top 5 News</h2>
        <div className="news-cards-container3">
          {topNews.map((news, index) => (
            <div className="news-card3" key={index}>
              <img src={news.img} alt={news.title} />
              <div className="news-text3">
                <h4>{news.title}</h4>
                <p>{news.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
         <div className="channel-page-enhanced">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Advertise on India's Leading Channels</h1>
          <p>
            Expand your brand's reach by placing advertisements on top television channels. 
            Barter Media ensures your ad reaches the right audience at the right time, 
            maximizing impact and ROI.
          </p>
          {/* <button className="cta-btn">Book Your Ad Slot</button> */}
        </div>
        <div className="hero-image">
          <img 
            src="/bvid6.avif" 
            alt="Advertising Concept" 
          />
        </div>
      </header>

      {/* Theory / Informative Section */}
      <section className="info-section">
        <h2>Why TV Advertising Works</h2>
        <p>
          Television advertising remains one of the most effective ways to reach a mass audience. 
          It combines visual and audio storytelling to create memorable brand experiences. 
          With targeted programming and prime-time slots, brands can engage specific demographics efficiently. 
          Advertising through Barter Media allows flexible barter deals, reducing costs while maximizing exposure.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" 
          alt="TV Advertising" 
        />
      </section>

      {/* Channel Logos & Cards */}
      <section className="channel-cards-section2">
        <h2>Our Channels</h2>
        <div className="channel-cards2">
          {channels.map((channel, index) => (
            <div className="channel-card2" key={index}>
             {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Zee_News_Logo.svg" alt="Zee News Logo" width="150" /> */}

              <img className="channel-image2" src={channel.image} alt={channel.name} />
              <h3>{channel.name}</h3>
              <p className="category">{channel.category}</p>
              <p className="reach">{channel.reach}</p>
              <p className="description">{channel.description}</p>
           <Link to="/contact">  <button className="advertise-btn">Advertise Now</button></Link> 
            </div>
          ))}
        </div>
      </section>

      {/* How to Advertise */}
      <section className="how-to-advertise">
        <h2>How to Advertise with Barter Media</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Select Channel & Package</h3>
            <p>Choose the best channel, slot, and package suitable for your campaign goals.</p>
          </div>
          <div className="step">
            <h3>2. Submit Your Creative</h3>
            <p>Upload your ad content or let our creative team assist you.</p>
          </div>
          <div className="step">
            <h3>3. Confirm Booking</h3>
            <p>Finalize your booking and payment through our secure system.</p>
          </div>
          <div className="step">
            <h3>4. Campaign Goes Live</h3>
            <p>Watch your ad reach millions across India’s top channels.</p>
          </div>
        </div>
      </section>
    </div>
      </section>
    </>
  );
};

export default Channel;
