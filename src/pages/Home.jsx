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

      <YTshort maxResults="8" />
      <Tiktok />
      <Instagram />
      <Youtube maxResults="20" />
      <Twitter />
      <FacebookReels maxResults="8" />

    </>
  );
}

export default Home;
