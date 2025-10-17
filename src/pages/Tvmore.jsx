import React from "react";
import "../style/tvmore.css";

const Tvmore = () => {
  const channels = [
    {
      name: "Zee Cinema",
      image: "/mov1.jpeg",
      text: "Advertise on Zee Cinema to reach millions of movie lovers across India. Perfect for blockbuster promotions and film launches.",
    },
    {
      name: "Sony Max",
      image: "/mov17.jpeg",
      text: "Promote your movies, shows, and products on Sony Max, one of the leading entertainment channels.",
    },
    {
      name: "Star Gold",
      image: "/mov20.jpeg",
      text: "Star Gold brings you an unmatched audience for film advertising and brand promotions.",
    },
    {
      name: "&Pictures",
      image: "/mov3.jpeg",
      text: "Advertise on &Pictures to target audiences who love entertainment and movies.",
    },
    {
      name: "Colors Cineplex",
      image: "/mov5.jpeg",
      text: "Reach premium movie viewers across India on Colors Cineplex for effective ad campaigns.",
    },
  ];

  return (
    <div className="tvmore-page">
      {/* Top Banner - only once */}
      <div className="tv-banner">
        <div className="banner-text">
          <h1>Advertise on Top Channels</h1>
          <p>Reach millions of viewers by advertising on leading entertainment channels.</p>
        </div>
        <div className="banner-video">
          <video src="/bbvid2.mp4" autoPlay muted loop></video>
        </div>
      </div>

      {/* Info Section for each channel */}
      {channels.map((channel, idx) => (
        <div key={idx} className="tv-info">
          <div className="info-left">
            <h2>Advertise on {channel.name}</h2>
            <p>{channel.text}</p>
          </div>
          <div className="info-right">
            <img src={channel.image} alt={channel.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tvmore;
