// React Component (WelcomePage.js)
import React from "react";
import "../style/welcomepage.css";


const WelcomePage = () => {
return (
<div className="welcome-container">
<header className="welcome-banner">
<h1>Welcome to Barter Media</h1>
<p>Your trusted partner in media, advertising, and brand growth.</p>
</header>


<section className="welcome-about">
<h2>About Us</h2>
<p>
Barter Media is a leading media solutions company helping brands
maximize visibility across TV, OTT, digital, and print. We specialize
in barter deals, ensuring cost-effective campaigns with maximum impact.
</p>
</section>


<section className="welcome-services">
<h2>Our Services</h2>
<div className="service-cards">
<div className="service-card">
<img src="/bvid7.avif" alt="TV Advertising" />
<h3>TV Advertising</h3>
<p>Reach millions of viewers with impactful TV campaigns.</p>
</div>
<div className="service-card">
<img src="/bvid8.avif" alt="OTT Advertising" />
<h3>OTT Advertising</h3>
<p>Engage digital audiences with OTT platforms and targeted ads.</p>
</div>
<div className="service-card">
<img src="/bvid2.avif" alt="Digital Campaigns" />
<h3>Digital Campaigns</h3>
<p>Leverage social media & digital platforms for growth.</p>
</div>
</div>
</section>


<section className="welcome-gallery">
<h2>Campaign Gallery</h2>
<div className="gallery-grid">
<img src="/bvid3.avif" alt="Gallery 1" />
<img src="/bvid4.avif" alt="Gallery 2" />
<img src="/bvid5.avif" alt="Gallery 3" />
<img src="/bvid6.avif" alt="Gallery 4" />
</div>
</section>



</div>
);
};


export default WelcomePage;