import React from "react";
import "../style/ipl.css";

const iplImages = [
  "/ipl1.jpeg",
  "/ipl2.jpeg",
 

];

const iplImages1 = [

  "/asia1.jpeg",
  "/asia2.jpeg"

];

 const match = {
    teams: "Mumbai Indians vs Chennai Super Kings",
    score: "MI 120/3 | CSK 118/2",
    venue: "Wankhede Stadium",
    time: "7:30 PM IST"
  };

  const services = [
    { title: "TV Advertising", description: "Reach millions through TV campaigns." },
    { title: "Digital Campaigns", description: "Target IPL fans online efficiently." },
    { title: "Social Media Promotions", description: "Boost brand engagement via social media." }
  ];

  const players = [
    { name: "Rohit Sharma", type: "Batsman", runs: 450 },
    { name: "Jasprit Bumrah", type: "Bowler", wickets: 18 },
    { name: "MS Dhoni", type: "Batsman", runs: 320 }
  ];

  const partners = ["/logos/logo1.png", "/logos/logo2.png", "/logos/logo3.png", "/logos/logo4.png"];

  const videos = [
    { title: "MI vs CSK Highlights", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Best Moments", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ];

  const testimonials = [
    { name: "Brand A", text: "Barter Media boosted our IPL campaign tremendously!" },
    { name: "Brand B", text: "Amazing exposure and results during IPL." }
  ];
const IPLPage = () => {
  return (
    <div className="ipl-page">
      
      {/* Banner */}
      <div className="ipl-banner">
        <div className="banner-left">
          <h1>Indian Premier League 2025</h1>
          <p>
            The IPL is one of the most exciting T20 cricket leagues in the world. 
            Watch your favorite teams compete for the championship and witness thrilling matches!
          </p>
        </div>
        <div className="banner-right">
          <video autoPlay loop muted playsInline>
            <source src="/iplvid1.mp4" type="video/mp4 "  />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>





       <div className="barter-ipl-div">
      <div className="header1">
        <h2>BARTER MEDIA SERVICES</h2>
        <h3>Unlock Your Brand's Power with IPL Barter Deals!</h3>
      </div>

      <div className="content-row">
        <div className="left-image">
          <img src="/ipl11.png" alt="IPL Advertising with Barter Media" />
        </div>

        <div className="right-text">
          <p className="intro">
            Dominate the IPL Season Without Draining Your Budget! The Indian Premier League (IPL) is more than just a cricket tournament; it's a cultural phenomenon, a marketing powerhouse, and an unparalleled platform for brand visibility. Each year, millions tune in, offering advertisers a golden opportunity to connect with a massive, engaged audience. But securing prime IPL advertising spots can be incredibly expensive.
          </p>

          <p>
            This is where Barter Media Services steps in! We specialize in crafting smart, cash-saving barter deals that get your brand into the heart of the IPL action. Forget hefty upfront payments; leverage your assets to gain unparalleled exposure during India's biggest sporting spectacle.
          </p>

          <h3>Why Choose Barter Media for Your IPL Advertising?</h3>
          <ul>
            <li><strong className="dark">Cashless Advertising:</strong> Preserve your precious marketing budget. Instead of cash, exchange your products, services, or even excess inventory for premium IPL ad slots.</li>
            <li><strong>Unmatched Reach:</strong> Gain access to millions of viewers across TV, digital, and print platforms associated with the IPL. Your brand will be seen by a highly engaged and diverse audience.</li>
            </ul>
        </div>
      </div>
      <p className="dark1"> <li><strong>Maximize Value:</strong> Turn slow-moving  and ever inventory or underutilized assets into high-impact advertising. We help you unlock hidden value within your business.</li>
            <li><strong>Strategic Placement:</strong> Our expertise ensures your brand gets the right visibility at the right time during IPL matches, reaching your target demographic effectively.</li>
            <li><strong>Build Brand Authority:</strong> Align your brand with the excitement and across tv, digital plateforms prestige of the IPL, enhancing your market presence and consumer trust.</li>
         </p>
    </div>



      {/* Horizontal Images */}
     <div className="ipl-section">
  <h2 className="ipl-heading">IPL PLATFORM IN BARTER</h2>  {/* Heading added */}

  <div className="ipl-images">
    {iplImages.map((img, i) => (
      <div className="ipl-card" key={i}>
        <img src={img} alt={`ipl-${i}`} />
      </div>
    ))}
  </div>
</div>



  


  {/* ipl compionship */}

 <div className="ipl-section">
  <h2 className="ipl-heading">ASIA CUP IN BARTER</h2>  {/* Heading added */}

  <div className="ipl-images">
    {iplImages1.map((img, i) => (
      <div className="ipl-card" key={i}>
        <img src={img} alt={`ipl-${i}`} />
      </div>
    ))}
  </div>
</div>

      {/* Text Sections */}
      <div className="ipl-section">
  <h1 className="ipl-section-heading">IPL Insights</h1>  {/* Top heading */}
  
  <div className="ipl-texts">
    <div className="ipl-text-box">
      <h2>History of IPL</h2>
      <p>
        The Indian Premier League was founded in 2008 and has since become one of the most popular cricket leagues worldwide.
        Famous players from around the world participate, making it a thrilling experience for fans.
      </p>
    </div>
    <div className="ipl-text-box">
      <h2>Top Teams & Players</h2>
      <p>
        IPL showcases top teams like Mumbai Indians, Chennai Super Kings, and Delhi Capitals.  
        Star players like Virat Kohli, Rohit Sharma, and MS Dhoni bring excitement and unforgettable moments on the field.
      </p>
    </div>
    <div className="ipl-text-box">
      <h2>Fan Engagement & Entertainment</h2>
      <p>
        IPL is not just about cricket; it’s a complete entertainment package with cheerleaders, music, and live events.  
        Fans actively participate through social media, fantasy leagues, and fan contests, creating a vibrant community.
      </p>
    </div>
    <div className="ipl-text-box">
      <h2>Economic & Cultural Impact</h2>
      <p>
        IPL has significantly boosted the economy, generating revenue through sponsorships, broadcasting, and tourism.  
        It has also become a cultural phenomenon, uniting cricket fans across India and the globe.
      </p>
    </div>
  </div>
</div>

        
         <div className="ipl-page1">

      {/* Live Score */}
      <section className="live-score-section">
        <h2>Live Match Update</h2>
        <p><strong>{match.teams}</strong></p>
        <p>{match.score}</p>
        <p>{match.venue} - {match.time}</p>
      </section>

      {/* Barter Services */}
      <section className="barter-services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          {services.map((s, idx) => (
            <div key={idx} className="service-card2">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Player Highlights */}
      <section className="player-highlights-section">
        <h2>Top Players</h2>
        <div className="player-cards">
          {players.map((p, idx) => (
            <div key={idx} className="player-card">
              <h3>{p.name}</h3>
              <p>{p.type}</p>
              <p>{p.runs ? `Runs: ${p.runs}` : `Wickets: ${p.wickets}`}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media Partners */}
      {/* <section className="media-partners-section">
        <h2>Our Media Partners</h2>
        <div className="partners-logos">
          {partners.map((logo, idx) => (
            <img key={idx} src={logo} alt="partner-logo" />
          ))}
        </div>
      </section> */}

      {/* Video Highlights */}
      {/* <section className="video-highlights-section">
        <h2>Video Highlights</h2>
        <div className="video-cards">
          {videos.map((v, idx) => (
            <div key={idx} className="video-card">
              <iframe
                width="300"
                height="170"
                src={v.url}
                title={v.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>{v.title}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="testimonials-section">
        <h2>Client Testimonials</h2>
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </section> */}

      {/* Social Feed */}
      {/* <section className="social-feed-section">
        <h2>Live Social Media Feed</h2>
        <p>Embed Twitter/Facebook/Instagram feeds here with #IPL2025 #BarterMedia</p>
      </section>

   
      <section className="cta-section">
        <h2>Advertise With Us During IPL</h2>
        <button className="cta-btn">Advertise Now</button>
        <button className="cta-btn">Join Campaign</button>
      </section> */}
    </div>

    </div>
  );
};

export default IPLPage;
