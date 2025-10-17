import React from "react";
import "../style/founder.css";

const timeline = [
  { year: "2012", title: "Founded PMC Barter Media", desc: "Started with a vision to convert unsold inventory into powerful media campaigns." },
  { year: "2015", title: "Expanded to 10+ Cities", desc: "Built partnerships across regional networks and local broadcasters." },
  { year: "2018", title: "500+ Campaigns Delivered", desc: "Scaled operations, added celebrity integrations and OTT tie-ups." },
  { year: "2021", title: "National Recognition", desc: "Recognized as a leading barter-exchange platform in media industry." },
  { year: "2024", title: "Sustainable Barter Solutions", desc: "Launched green initiatives and inventory-optimization services." },
];

const stats = [
  { number: "1000+", label: "Clients Served" },
  { number: "700+", label: "Barter Campaigns" },
  { number: "20+", label: "Cities Covered" },
  { number: "13 yrs", label: "Industry Experience" },
];

const testimonials = [
  { quote: "Under his leadership we scaled our ad reach without burning cash. Truly visionary.", author: "Rita kapoor, Marketing Head" },
  { quote: "Practical, reliable and result oriented. A pleasure to work with.", author: "Ankur Banshal, Director" },
];

const Founder = () => {
  return (
    <>
      <section className="founder-section">
      {/* Left Text Section */}
      <div className="founder-left">
        <h1>Meet Our Founder</h1>
        <h3>Pooja Sharma - Founder & CEO</h3>
        <p>
          Pooja Sharma started Barter Media with a vision to revolutionize the
          advertising industry by creating a barter-based ecosystem. His
          leadership and innovative approach have helped businesses maximize
          their inventory and achieve impactful brand presence without heavy
          cash investments.
        </p>
        <p>
          With years of experience in media, Pooja continues to guide Barter
          Media towards growth, innovation, and building long-term partnerships
          with clients across industries.
        </p>
      </div>

      {/* Right Video Section */}
      <div className="founder-right">
        <video
          autoPlay
          loop
          muted
          className="founder-video"
        >
          <source src="/bbvid9.mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    
 
    <main className="founder-page">
      {/* Hero */}
      <section className="founder-hero">
        <div className="hero-left">
          <img src="/founder.webp" alt="Founder - Rajesh Kumar" className="founder-photo" />
        </div>

        <div className="hero-right">
          <h1>Pooja Sharma</h1>
          <h3>Founder & CEO — PMC Barter Media</h3>
          <p className="hero-lead">
            A serial media innovator who transformed unused inventory into measurable marketing value.
            Rajesh combines deep industry relationships, data-driven strategy and a simple barter-first
            model to help brands advertise smarter.
          </p>

          <div className="hero-cta">
            <a href="/Rajesh-Kumar-CV.pdf" className="btn btn-outline" download>Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact Pooja Sharma</a>
          </div>

          <ul className="socials">
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">X</a></li>
            <li><a href="mailto:rajesh@pmcbarter.com">Email</a></li>
          </ul>
        </div>
      </section>

      {/* About / Mission */}
      <section className="founder-about">
        <h2>About Pooja Sharma</h2>
        <p>
         Pooja Sharma started PMC Barter Media in 2012 with the aim of solving two problems simultaneously —
          unsold inventory for media owners and budget constraints for advertisers. Over the years he
          has negotiated partnerships with top broadcasters and built a platform trusted by multinational
          brands and local businesses alike. His leadership is centered on transparency, measurable ROI,
          and sustainability.
        </p>

        <div className="founder-values">
          <div>
            <h4>Vision</h4>
            <p>To make advertising accessible for every brand by maximizing value through barter.</p>
          </div>
          <div>
            <h4>Approach</h4>
            <p>Data-first campaign design, partner-first negotiations, and relentless focus on outcomes.</p>
          </div>
          <div>
            <h4>Impact</h4>
            <p>Saved 50%+ marketing spends for multiple clients while increasing reach and engagement.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="founder-timeline">
        <h2>Career Timeline</h2>
        <ol className="timeline-list">
          {timeline.map((t, i) => (
            <li key={i} className="timeline-item">
              <span className="timeline-year">{t.year}</span>
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Stats */}
      <section className="founder-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <h3>{s.number}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="founder-testimonials">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial">
              <p>"{t.quote}"</p>
              <footer>- {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="founder-contact">
        <h2>Get in touch</h2>
        <p>If you'd like to discuss a campaign, partnership, or speaking engagement — drop a note.</p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
          </div>
          <textarea placeholder="Message" rows="5" required></textarea>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Send Message</button>
            <a href="mailto:rajesh@pmcbarter.com" className="btn btn-outline">Email Directly</a>
          </div>
        </form>
      </section>

      {/* <footer className="founder-footer">
        <p>© {new Date().getFullYear()} PMC Barter Media — All rights reserved.</p>
      </footer> */}
    </main>
       </>
  );
};

export default Founder;
