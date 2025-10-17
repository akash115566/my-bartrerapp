import React from "react";
import "../style/entermore.css";

const Entermore = () => {
  const channels = [
    {
      name: "Dangal",
      text: "Advertise on Dangal to reach millions of viewers who love family entertainment and drama shows.",
      image: "/entertainment/23.jpeg",
    },
    {
      name: "StarPlus",
      text: "Promote your products and shows on StarPlus, one of India's most popular entertainment channels.",
      image: "/entertainment/39.jpeg",
    },
    {
      name: "Colors",
      text: "Advertise on Colors to connect with diverse audiences across India with premium content.",
      image: "/entertainment/42.jpeg",
    },
    // {
    //   name: "Sony",
    //   text: "Reach millions of viewers with Sony's trusted entertainment network for your brand.",
    //   image: "/entertainment/6.jpeg",
    // },
    {
      name: "Star Utsav",
      text: "Promote your shows and products on Star Utsav to reach Hindi speaking audiences effectively.",
      image: "/entertainment/44.jpeg",
    },
    {
      name: "Star Bharat",
      text: "Advertise on Star Bharat and engage with audiences who enjoy regional and cultural programming.",
      image: "/entertainment/36.jpeg",
    },
    {
      name: "Sony Wah",
      text: "Target viewers of Sony Wah with focused campaigns and entertainment-driven content.",
      image: "/entertainment/14.jpeg",
    },
    {
      name: "Sony Sub",
      text: "Promote your brand on Sony Sub to reach regional audience across India effectively.",
      image: "/entertainment/26.jpeg",
    },
    {
      name: "Sony Pal",
      text: "Advertise on Sony Pal for a strong presence among family-oriented audiences.",
      image: "/entertainment/21.jpeg",
    },
    {
      name: "ZTV",
      text: "Reach millions with ZTV's entertainment programming for effective brand promotion.",
      image: "/entertainment/40.jpeg",
    },
  ];

  return (
    <div className="entermore-page">
      {/* Banner */}
      <div className="entermore-banner">
        <div className="banner-text">
          <h1>Welcome to EnterMedia</h1>
          <p>Advertise your brand on top Indian entertainment channels to reach millions of viewers.</p>
        </div>
        <div className="banner-video1">
          <video src="/bbvid2.mp4" autoPlay muted loop></video>
        </div>
      </div>

      {/* Channels Section */}
      <div className="channels-container">
        {channels.map((channel, idx) => (
          <div className="channel-card" key={idx}>
            <div className="channel-left">
              <h2>{channel.name}</h2>
              <p>{channel.text}</p>
            </div>
            <div className="channel-right">
              <img src={channel.image} alt={channel.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entermore;
