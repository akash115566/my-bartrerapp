import React from "react";
import "../style/ott.css";

const ottImages = [
  "/ott1.jpeg",
  "/ott2.jpeg",
  "/ott3.jpeg",
  "/ott4.jpeg",
  "/ott5.jpeg",
];
const ottData = [
  {
    img: "/ott1.jpeg",
    title: "Voot",
    desc: "Colors TV shows, Bigg Boss, and exclusive Indian originals – nonstop entertainment.",
  },
  {
    img: "/ott2.jpeg",
    title: "JioCinema / Hotstar",
    desc: "From IPL cricket to Bollywood blockbusters, all in one app for the ultimate binge.",
  },
  {
    img: "/ott3.jpeg",
    title: "ZEE5",
    desc: "Regional dramas, Bollywood hits, and 24/7 entertainment across every genre.",
  },
  {
    img: "/ott4.jpeg",
    title: "Sony LIV",
    desc: "Premium shows, live cricket, international series & Indian originals together.",
  },
  {
    img: "/ott5.jpeg",
    title: "MX Player",
    desc: "Free movies, web series, and trending short videos – desi entertainment hub.",
  },
];



const OttPage = () => {
  return (
    <div className="ott-page">
      {/* Banner */}
      <section className="ott-banner">
      {/* Left Side Text */}
      <div className="banner-left">
        <h1>Watch OTT Content Anytime</h1>
        <p>
          Stream movies, shows, and exclusive content from top OTT platforms.
          Enjoy entertainment without limits.
        </p>
        <button>Start Watching</button>
      </div>

      {/* Right Side Video */}
      <div className="banner-right">
        <video autoPlay loop muted playsInline>
          <source src="/bbvid7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <div className="ott-section1">
  <h2 className="ott-heading1">OTT Shows Gallery</h2>  {/* Heading added */}

  <div className="ott-images1">
    {ottImages.map((img, i) => (
      <div className="ott-card1" key={i}>
        <img src={img} alt={`ott-${i}`} />
      </div>
    ))}
  </div>
</div>


<div className="ott-container">

  {/* Voot */}
  <div className="ott-box">
    <h3>Voot</h3>
    <p>
      Voot is a popular OTT platform offering TV shows, movies, and reality 
      shows like Bigg Boss and Roadies.  
      It is especially known for streaming Colors TV content.
    </p>
  </div>

  {/* JioCinema / Hotstar */}
  <div className="ott-box">
    <h3>JioCinema / Hotstar</h3>
    <p>
      JioCinema and Disney+ Hotstar bring live sports, Bollywood movies, 
      web series, and exclusive Disney content.  
      They are among the largest streaming platforms in India.
    </p>
  </div>

  {/* Zee5 */}
  <div className="ott-box">
    <h3>Zee5</h3>
    <p>
      Zee5 is a complete entertainment platform with movies, TV serials, 
      web series, and regional shows.  
      Content is available in more than 12 languages.
    </p>
  </div>

  {/* Sony LIV */}
  <div className="ott-box">
    <h3>Sony LIV</h3>
    <p>
      Sony LIV is a premium OTT service in India featuring live cricket, 
      football, TV shows, and exclusive originals.  
      A perfect destination for both sports lovers and entertainment fans.
    </p>
  </div>

  {/* MX Player */}
  <div className="ott-box">
    <h3>MX Player</h3>
    <p>
      MX Player is a free OTT platform offering movies, TV shows, 
      and web series.  
      It is famous for its bold web content and vast free library.
    </p>
  </div>

</div>


      
    </div>

    
  );
};

export default OttPage;
