import React from "react";
import Instagram from "./Instagram";
import Youtube from "../components/Card/Youtube/Youtube";
import Twitter from "./Twitter";
import YTshort from "./YTshorts/index";
import Tiktok from "./Tiktok";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FacebookReels from "../components/Card/FacebookReels/FacebookReels";
function Home() {
  return (
    <>
      <YTshort maxResults="20" />
      <Tiktok />
      <Instagram maxResults="20" />
      <Youtube maxResults="20" />
      <Twitter />
      <FacebookReels maxResults="20" />
    </>
  );
}

export default Home;
