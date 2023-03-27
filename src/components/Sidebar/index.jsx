import { useState } from "react";
import "./sidebar.css";
import Home from "../../pages/Home";
import { Link, Outlet } from "react-router-dom";
function Sidebar() {
  const [open, setopen] = useState("");

  const handleopen = () => {
    open == "close" ? setopen("") : setopen("close");
  };

  return (
    <>
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
        <section className="main-content">
          <Home />
        </section>
      </main>
    </>
  );
}

export default Sidebar;
