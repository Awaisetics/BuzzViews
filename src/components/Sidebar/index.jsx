import { useState } from "react";
import "./sidebar.css";
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
          <Link to="/home">
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
          </Link>
          <i onClick={handleopen} className="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links p-0">
              <li className="nav-link">
                <Link to="/home">
                  <i class="bx bxs-home icon"></i>
                  <span className="text nav-text">Home</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/youtube">
                  <i class="bx bxl-youtube icon"></i>
                  <span className="text nav-text">Youtube Shorts</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/tiktok">
                  <i class="bx bxl-tiktok icon"></i>
                  <span className="text nav-text">Tiktok</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/instagram">
                  <i class="bx bxl-instagram-alt icon"></i>
                  <span className="text nav-text">Instagram Reels</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/youtube">
                  <i class="bx bxl-youtube icon"></i>
                  <span className="text nav-text">Youtube Videos</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/twitter">
                  <i class="bx bxl-twitter icon"></i>
                  <span className="text nav-text">Twitter</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/tiktok">
                  <i class="bx bxl-facebook icon"></i>
                  <span className="text nav-text">Facebook Reels</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            {/* <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li> */}
          </div>
        </div>
      </nav>
      <main className="home ">
        <section className="main-content">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default Sidebar;
