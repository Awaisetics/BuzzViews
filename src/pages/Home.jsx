import React from "react";
import Instagram from "./Instagram";
import YoutubeCard from "../components/Card/Youtube/Youtube";
import Twitter from "./Twitter";
function Home() {
  return (
    <>
      <YoutubeCard maxResults="6" />

      <Twitter />
      <div className="my-5">
        <Instagram />
      </div>
      {/* <Tiktok /> */}
    </>
  );
}

export default Home;
