// import React from "react";

// import "./Tiktok.css";

// function Tiktok() {
//   const videos = document.querySelectorAll("video");
//   for (const video of videos) {
//     video.addEventListener("click", function () {
//       console.log("clicked");
//       if (video.paused) {
//         video.play();
//       } else {
//         video.pause();
//       }
//     });
//   }
//   return (
//     <>
// <div className="app__videos">
//   <div className="video">
//     <video className="video__player" src="video1.mp4" />

//     <div className="videoSidebar">
//       <div className="videoSidebar-button">
//         <span className="material-icons">favorite_border</span>
//         <p>120k</p>
//       </div>

//       <div className="videoSidebar-button">
//         <span className="material-icons">message</span>
//         <p>560</p>
//       </div>

//       <div className="videoSidebar-button">
//         <span className="material-icons">share</span>
//         <p>1k</p>
//       </div>
//     </div>

//     <div className="videoFooter">
//       <div className="videoFooter__text">
//         <h3>Ruan</h3>
//         <p className="videoFooter__description">Video programação</p>
//       </div>

//       <div className="videoFooter__ticker">
//         <span className="material-icons videoFooter__icon">
//           music_note
//         </span>
//         <marquee>Song Name</marquee>
//       </div>
//       <img
//         src="https://static.thenounproject.com/png/934821-200.png"
//         alt="Disc"
//         className="videoFooter__record"
//       />
//     </div>
//   </div>
// </div>
//     </>
//   );
// }

// export default Tiktok;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import "./Tiktok.css";

const TikTokTrending = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://tiktok_solutions.p.rapidapi.com/trending/US",
      headers: {
        "X-RapidAPI-Key": "7dea0db1bdmsh8635c0257683064p1dac18jsn92b7c7d91e41",
        "X-RapidAPI-Host": "tiktok_solutions.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Data", response.data.data.list);
        setTrendingData(response.data.data.list);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2>Trending Videos</h2>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {trendingData?.map((data) => (
            <div className="app__videos">
              <div className="video">
                <video
                  className="video__player"
                  src="https://www.tiktok.com/@charlidamelio/video/7185719774276619563?_d=e5m2ehjca88ldh&_r=1&language=en&preview_pb=0&share_item_id=7185719774276619563&source=h5_m&u_code=0"
                />

                <div className="videoSidebar">
                  <div className="videoSidebar-button">
                    <span className="material-icons">favorite_border</span>
                    <p>120k</p>
                  </div>

                  <div className="videoSidebar-button">
                    <span className="material-icons">message</span>
                    <p>560</p>
                  </div>

                  <div className="videoSidebar-button">
                    <span className="material-icons">share</span>
                    <p>1k</p>
                  </div>
                </div>

                <div className="videoFooter">
                  <div className="videoFooter__text">
                    <h3>Ruan</h3>
                    <p className="videoFooter__description">
                      Video programação
                    </p>
                  </div>

                  <div className="videoFooter__ticker">
                    <span className="material-icons videoFooter__icon">
                      music_note
                    </span>
                    <marquee>Song Name</marquee>
                  </div>
                  <img
                    src="https://static.thenounproject.com/png/934821-200.png"
                    alt="Disc"
                    className="videoFooter__record"
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TikTokTrending;

{
  /* <div key={data.id} className="tiktok-card">
              <div className="tiktok-card__header">
                <img src={data.author.avatar} alt="User Avatar" />
                <div className="tiktok-card__header-info">
                  <h3>{data.author.language}</h3>
                  <span>{data.music.title}</span>
                </div>
              </div>
              <div className="tiktok-card__content">
                <video
                  src={data.share_url}
                  onClick={handleTogglePlay}
                  className={isPlaying ? "playing" : ""}
                />
              </div>
              <div className="tiktok-card__footer">
                <span className="likes">{data.statistics.diggCount} likes</span>
                <span className="comments">
                  {data.statistics.commentCount} comments
                </span>
                <span className="shares">
                  {data.statistics.shareCount} shares
                </span>
              </div>
            </div> */
}
