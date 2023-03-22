import React from "react";
import InstagramCard from "../components/Card/Instagram/Index";
function Instagram() {
  return (
    <>
      <div id="instagram" className="container mt-5">
        <div className="d-flex align-items-center mb-3">
          <i class="bx bxl-instagram bx-lg text-danger"></i>
          <strong className="pb-1 ms-3" style={{ fontSize: "2rem" }}>
            Instagram
          </strong>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <InstagramCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Instagram;
