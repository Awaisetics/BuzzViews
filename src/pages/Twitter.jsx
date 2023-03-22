import { Container, Box } from "@mui/system";
import React from "react";
import TwitterCard from "../components/Card/Twitter/Twitter";

function Twitter() {
  return (
    <>
      <div
        id="twitter"
        className="container mt-5"
        style={{ height: "99.5%", overflow: "hidden" }}
      >
        <div className="d-flex align-items-center">
          <i class="bx bxl-twitter bx-lg text-primary"></i>
          <strong className="pb-1 ms-3 " style={{ fontSize: "2rem" }}>
            Twitter
          </strong>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <TwitterCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Twitter;
