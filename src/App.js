import "./App.css";
import "./components/Sidebar/sidebar.css";
import Twitter from "./pages/Twitter";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Instagram from "./pages/Instagram";
import Tiktok from "./pages/Tiktok";
import Youtube from "./pages/Youtube";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Sidebar />
      {/* <Home /> */}
      {/* <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="home" element={<Home />} />
          <Route path="youtube" element={<Youtube />} />
          <Route path="instagram" element={<Instagram />} />
          <Route path="twitter" element={<Twitter />} />
          <Route path="tiktok" element={<Tiktok />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
