import React from "react";
import Instagram from "./Instagram";
import Youtube from "../components/Card/Youtube/Youtube";
import Twitter from "./Twitter";
import Tiktok from './Tiktok'
import FacebookReels from './FbReels'
function Home() {
  return (
    <>
      <Tiktok />
      <Youtube maxResults="8" />
      <Twitter />
      <Instagram />
      <FacebookReels />
    </>
  );
}

export default Home;
