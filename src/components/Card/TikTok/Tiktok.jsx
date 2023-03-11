import React from "react";

import "./Tiktok.css";

function Tiktok() {
  const videos = document.querySelectorAll("video");
  for (const video of videos) {
    video.addEventListener("click", function () {
      console.log("clicked");
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
  return (
    <>
      <div className="app__videos">
        <div className="video">
          <video className="video__player" src="video1.mp4" />

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
              <p className="videoFooter__description">Video programação</p>
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
    </>
  );
}

export default Tiktok;
