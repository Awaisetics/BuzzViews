import React, { useState, useEffect } from "react";
import "./youtube.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import axios from "axios";
import { CircularProgress } from "@mui/material";
const Youtube = ({ maxResults }) => {
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


  const makeVideoCard = (video) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id}`;
    const channelUrl = `https://www.youtube.com/channel/${video.channelId}`;
    return (
      <div className="card shadow my-4 p-0 w-100" key={video.id}>
        <div className="embed-responsive w-100 embed-responsive-16by9" style={{ height: "300px" }}>
          <iframe
            className="embed-responsive-item w-100 h-100 m-0"
            src={videoUrl}
            title={video.title}
            allowFullScreen
          />
        </div>
        <div className="card-body">
          <h5
            className="card-title text-dark"
            style={{ lineBreak: "anywhere" ,fontSize : "16px" }}
          >
            {video.title.slice(0, 20)}
          </h5>
          <p
            className="card-text text-secondary"
            style={{
              
              overflow: "hidden",
              display: "-webkit-box",
              webkitBoxOrient: "vertical",
              webkitLineClamp: "3",
              fontSize: "12px"
            }}
          >
            {video.description.slice(0,50)}
          </p>
          <div className="channel-info mt-3">
            <a href={channelUrl} target="_blank" rel="noopener noreferrer">
              <img
                className="channel-thumbnail text-dark rounded-circle me-2"
                style={{ width: "40px", height: "40px", borderadius: "50%" }}
                src={video.channelThumbnail}
                alt={video.channelTitle}
              />
            </a>
            <a href={channelUrl} target="_blank" rel="noopener noreferrer">
              <span className="channel-title text-dark" style={{fontSize : "12px"}}>
                {video.channelTitle.slice(0, 25)}
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="youtube"
      className="container"
    >
      <div className="d-flex align-items-center">
        <i class="bx bxl-youtube bx-lg text-danger"></i>
        <strong className="pb-1 ms-3" style={{ fontSize: "2rem" }}>
          YouTube
        </strong>
      </div>
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        // <div className="row">
          <Carousel showThumbs={false}>
            <div className="row">
              {videoData.slice(0,4).map((video) => {
                return (
                  <div className="col-12 col-sm-6 col-md-3" key={video.id}>
                    {makeVideoCard(video)}
                  </div>
                )
              })}
            </div>
              <div className="row">
                {videoData.slice(4,8).map((video, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-3" key={video.id}>
                      {makeVideoCard(video)}
                    </div>
                  )
                })}
            </div>

          </Carousel>
        // </div>
      )}
    </div>
  );
};

export default Youtube;
