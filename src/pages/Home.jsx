import React from "react";
import Instagram from "./Instagram";
import Youtube from "../components/Card/Youtube/Youtube";
import Twitter from "./Twitter";
import YTshort from "./YTshorts/index";
import Tiktok from './Tiktok'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FacebookReels from '../components/Card/FacebookReels/FacebookReels'
function Home() {
  return (
    <>
      <Youtube maxResults="8" />
      <Twitter />
      <Tiktok />
      <Instagram />
      <FacebookReels maxResults="8" />
      <YTshort maxResults="8" />
    </>
  );
}

export default Home;
