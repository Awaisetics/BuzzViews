import React, { useState, useEffect } from "react";
import "./YTshorts.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Video from "../../assets/YTshort.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const YTshorts = ({ maxResults }) => {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const videoEndpoint =
    "https://www.googleapis.com/youtube/v3/videos?key=" +
    API_KEY +
    `&part=snippet&chart=mostPopular&maxResults=${maxResults}&regionCode=US`;
  const channelEndpoint =
    "https://www.googleapis.com/youtube/v3/channels?key=" +
    API_KEY +
    "&part=snippet";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoResponse = await axios.get(videoEndpoint);
        const videoItems = videoResponse.data.items;
        const videoIds = videoItems
          .map((item) => item.snippet.channelId)
          .join(",");

        const channelResponse = await axios.get(
          channelEndpoint + "&id=" + videoIds
        );
        const channelItems = channelResponse.data.items;

        const videoData = videoItems.map((item) => {
          const channelItem = channelItems.find(
            (channel) => channel.id === item.snippet.channelId
          );
          return {
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.medium.url,
            channelTitle: item.snippet.channelTitle,
            channelId: item.snippet.channelId,
            channelThumbnail: channelItem.snippet.thumbnails.default.url,
          };
        });
        setVideoData(videoData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const videoControls = (e) => {
    if (e.target?.paused) {
      e.target.play();
    } else {
      e.target.pause();
    }
  };
  const makeVideoCard = (video) => {
    const videoUrl = "https://www.facebook.com/reel/872849267301095/?s=ifu";
    const channelUrl = `https://www.youtube.com/channel/${video.channelId}`;
    return (
      <div
        className="card position-relative shadow mb-4 p-0 w-100"
        key={video.id}
      >
        <video onClick={videoControls} className="w-100 h-100" src={Video} />
        <div className="card-body w-100 position-absolute bottom-0">
          <p
            className="card-title text-light"
            style={{ lineBreak: "anywhere", fontSize: "15px" }}
          >
            {video.title.slice(0, 20)}
          </p>
          <div className="channel-info d-flex justify-content-between">
            <div>
              <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                <img
                  className="channel-thumbnail text-dark rounded-circle me-2"
                  style={{ width: "30px", height: "30px", borderadius: "50%" }}
                  src={video.channelThumbnail}
                  alt={video.channelTitle}
                />
              </a>
              <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                <span
                  style={{ fontSize: "14px" }}
                  className="channel-title text-light"
                >
                  {video.channelTitle.slice(0, 9)}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="YTshorts" className="container">
      <div className="d-flex align-items-center mb-3">
        <i class="bx bxl-youtube bx-lg text-danger"></i>
        <strong className="pb-1 ms-3" style={{ fontSize: "2rem" }}>
          YouTube Shorts
        </strong>
      </div>
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <Carousel showThumbs={false}>
          <div className="row">
            {videoData.slice(0, 4).map((video) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={video.id}
                >
                  {makeVideoCard(video)}
                </div>
              );
            })}
          </div>
          <div className="row">
            {videoData.slice(4, 8).map((video) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={video.id}
                >
                  {makeVideoCard(video)}
                </div>
              );
            })}
          </div>
          <div className="row">
            {videoData.slice(8, 12).map((video) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={video.id}
                >
                  {makeVideoCard(video)}
                </div>
              );
            })}
          </div>
          <div className="row">
            {videoData.slice(12, 16).map((video) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={video.id}
                >
                  {makeVideoCard(video)}
                </div>
              );
            })}
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default YTshorts;
