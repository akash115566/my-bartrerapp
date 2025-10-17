import React from "react";
import "../style/newsmore.css";

const Newsmore = () => {
  const newsSections = [
    {
      heading: "Times Now",
      text: "Stay updated with the latest breaking news, live reports, and top stories from Times Now.",
      image: "/new1.jpeg",
    },
    {
      heading: "ABP News",
      text: "ABP News brings you real-time news, politics, business updates, and trending stories.",
      image: "/new19.jpg",
    },
    {
      heading: "R Bharat",
      text: "R Bharat covers national news, political updates, and in-depth analysis of major events.",
      image: "/new3.jpeg",
    },
    {
      heading: "Zee News",
      text: "Zee News delivers breaking news, regional updates, and expert opinions across India.",
      image: "/new4.jpeg",
    },
    {
      heading: "Aaj Tak",
      text: "Aaj Tak is your source for latest headlines, trending news, and top stories every day.",
      image: "/new5.jpeg",
    },
  ];

  return (
    <div className="newsmore-page">
      {/* Banner */}
      <div className="news-banner1">
        <div className="banner-tex1t">
          <h1>Top News Updates</h1>
          <p>Get the latest breaking news from India's leading news channels in one place.</p>
        </div>
        <div className="banner-video1">
          <video src="/bbvid9.mp4" autoPlay muted loop></video>
        </div>
      </div>

      {/* News Sections */}
      {newsSections.map((section, idx) => (
        <div className="news-section" key={idx}>
          <div className="news-left">
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </div>
          <div className="news-right">
            <img src={section.image} alt={section.heading} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Newsmore;
