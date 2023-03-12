import React from "react";
import InstagramCard from "../components/Card/Instagram/Index";
function Instagram() {
  return (
    <>
      <div className="container ">
        <div className="d-flex align-items-center">
          <i class="bx bxl-instagram bx-lg text-danger"></i>
          <strong className="pb-1 ms-3" style={{ fontSize: "2rem" }}>
            Instagram
          </strong>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-4 my-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 my-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 my-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 my-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 my-3">
            <InstagramCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 my-3">
            <InstagramCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Instagram;
