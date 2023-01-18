import React from "react";
import "./style.css";
import SideBar from "./components/Sidemenu";
import TopBar from "./components/TopBar";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <TopBar />
        <DashBoard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
