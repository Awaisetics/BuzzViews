import { useState } from "react";
import "./sidebar.css";
import Home from "../../pages/Home";
function Sidebar() {
  const [open, setopen] = useState("");
  
  const handleopen = () => {
    open == "close" ? setopen("") : setopen("close");
  };

  const detectMobile = () => {
    if (window.innerWidth <= 1000) { 
      document.querySelector('.sidebar').classList.add('close');
      document.querySelector('.bx-chevron-right').classList.add('d-none');
    } else {
      document.querySelector('.sidebar').classList.remove('close');
      document.querySelector('.bx-chevron-right').classList.remove('d-none');
    }
  }

  window.addEventListener('load', detectMobile);
  window.addEventListener('resize', detectMobile);

  return (
    <>
      <nav class="navbar z-1 navbar-expand-md d-md-none bg-white">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" style={{ color: "#695cfe" , fontWeight: 700}} href="#home">BuzzViews</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item border px-2 py-1 mt-2">
                <a href="#YTshorts">
                  <i class="bx bxl-youtube icon me-2 text-danger"></i>
                  <span className="text nav-text text-dark">Youtube Shorts</span>
                </a>
              </li>
              <li className="nav-item border px-2 py-1">
                <a href="#tiktok">
                  <i class="bx bxl-tiktok icon me-2 text-dark"></i>
                  <span className="text nav-text text-dark">Tiktok</span>
                </a>
              </li>
              <li className="nav-item border px-2 py-1">
                <a href="#instaReels">
                  <i class="bx bxl-instagram-alt icon me-2 text-danger"></i>
                  <span className="text nav-text text-dark">Instagram Reels</span>
                </a>
              </li>
              <li className="nav-item border px-2 py-1">
                <a href="#youtube">
                  <i class="bx bxl-youtube icon me-2 text-danger"></i>
                  <span className="text nav-text text-dark">Youtube Videos</span>
                </a>
              </li>
              <li className="nav-item border px-2 py-1">
                <a href="#twitter">
                  <i class="bx bxl-twitter icon me-2 text-primary"></i>
                  <span className="text nav-text text-dark">Twitter</span>
                </a>
              </li>

              <li className="nav-item border px-2 py-1">
                <a href="#fbReels">
                  <i class="bx bxl-facebook icon me-2 text-primary"></i>
                  <span className="text nav-text text-dark">Facebook Reels</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className={`sidebar ${open}`}>
        <header>
          <a href="#home">
            <div className="image-text">
              <span className="image">
                <i
                  class="bx bxs-movie-play bx-lg"
                  style={{ paddingTop: "4px", color: "#695cfe" }}
                ></i>
                {/* <img src="logo.png" alt="logo" /> */}
              </span>

              <div className="text logo-text">
                <span className="name">Buzz views</span>
                <span className="profession">Social Media App</span>
              </div>
            </div>
          </a>
          <i onClick={handleopen} className="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links p-0">
              {/* <li className="nav-link">
                <a href="#home">
                  <i class="bx bxs-home icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li> */}
              <li className="nav-link">
                <a href="#YTshorts">
                  <i class="bx bxl-youtube icon"></i>
                  <span className="text nav-text">Youtube Shorts</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#tiktok">
                  <i class="bx bxl-tiktok icon"></i>
                  <span className="text nav-text">Tiktok</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#instaReels">
                  <i class="bx bxl-instagram-alt icon"></i>
                  <span className="text nav-text">Instagram Reels</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#youtube">
                  <i class="bx bxl-youtube icon"></i>
                  <span className="text nav-text">Youtube Videos</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#twitter">
                  <i class="bx bxl-twitter icon"></i>
                  <span className="text nav-text">Twitter</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#fbReels">
                  <i class="bx bxl-facebook icon"></i>
                  <span className="text nav-text">Facebook Reels</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main id="home" className="home">
        <section className="main-content mt-md-0">
          <Home />
        </section>
      </main>
    </>
  );
}

export default Sidebar;
