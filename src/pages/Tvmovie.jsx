import React from "react";
import "../style/tvmovie.css" // CSS file for styling

const TvMovie = () => {
    return (
        <div className="tv-movie-page">
            {/* Top Banner */}
            <section className="banner">
                <div className="banner-left">
                    <h1>TV MOVIE CHANNELS ADVERTISE</h1>
                    <p>Discover the latest movies on your favorite channels</p>
                </div>
                <div className="banner-right">

                    <video autoPlay loop muted playsInline>
                        <source src="/bbvid9.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Channel Sections */}
            <section className="channels">

                {/* Zee Cinema */}
                <div className="channel">
                    <div className="channel-left">
                        <h2>Zee Cinema</h2>
                        <img src="/mov1.jpeg" alt="Zee Cinema" />
                    </div>
                    <div className="channel-right">
                        <p>
                            Zee Cinema brings you the latest Bollywood blockbusters and timeless classics.
                            From heartwarming family dramas to high-octane action thrillers, this channel
                            has something for everyone. Enjoy exclusive premieres, celebrity interviews,
                            behind-the-scenes footage, and special movie marathons that keep you entertained
                            24/7. Whether you are a fan of romance, comedy, or suspense, Zee Cinema delivers
                            world-class entertainment straight to your screen. Tune in and experience the magic
                            of Bollywood like never before.
                        </p>
                    </div>
                </div>

                {/* Color Cineplex */}
                <div className="channel">
                    <div className="channel-left">
                        <h2>Color Cineplex</h2>
                        <img src="/mov2.jpeg" alt="Color Cineplex" />
                    </div>
                    <div className="channel-right">
                        <p>
                            Color Cineplex showcases family-friendly movies and classic hits, perfect for movie nights with loved ones.
                            From timeless Bollywood favorites to feel-good comedies and heartwarming dramas, this channel ensures
                            entertainment for all ages. Enjoy special movie marathons, exclusive behind-the-scenes features, and
                            curated collections of cinematic gems. Whether it’s laughter, romance, or a little bit of suspense,
                            Color Cineplex delivers a complete movie experience that brings families together for unforgettable
                            moments of fun and excitement.
                        </p>
                    </div>
                </div>

                {/* Sony Max */}
                <div className="channel">
                    <div className="channel-left">
                        <h2>Sony Max</h2>
                        <img src="/mov3.jpeg" alt="Sony Max" />
                    </div>
                    <div className="channel-right">
                        <p>
                            Sony Max offers a wide selection of Bollywood blockbusters and exclusive premieres for movie enthusiasts.
                            From thrilling action-packed adventures to heartwarming family dramas and romantic sagas, this channel
                            caters to every taste. Enjoy special movie nights, celebrity interviews, behind-the-scenes features,
                            and curated movie collections that keep fans entertained around the clock. With high-quality visuals
                            and non-stop entertainment, Sony Max is the ultimate destination for lovers of Bollywood cinema,
                            delivering excitement, emotion, and unforgettable cinematic experiences to your living room.
                        </p>
                    </div>
                </div>

                {/* Star Plus & Picture */}
                <div className="channel">
                    <div className="channel-left">
                        <h2>Star Plus & Picture</h2>
                        <img src="/mov4.jpeg" alt="Star Plus & Picture" />
                    </div>
                    <div className="channel-right">
                        <p>
                            Star Plus & Picture provide family dramas, entertainment shows, and blockbuster films to keep you entertained around the clock.
                            Enjoy popular serials, heartwarming family stories, reality shows, and exclusive movie premieres that cater to every age group.
                            From inspiring tales and laughter-filled comedies to thrilling action-packed films, there’s always something for everyone.
                            With curated content, special weekend movie marathons, and celebrity interviews, Star Plus & Picture deliver nonstop entertainment,
                            bringing families together and making every viewing experience memorable and enjoyable.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default TvMovie;
