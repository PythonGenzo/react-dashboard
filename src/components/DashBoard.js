import React from "react";
import EarningCard from "./EarningCard";
import earnings from "../data/earningData";
import OverviewCard from "./OverviewCard";
import PieChart from "./PieChart";
import ProjectCard from "./ProjectCard";
import ColorCard from "./ColorCard";
import Approach from "./Approach";
import Illustration from "./Illustrations";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="/"
          className="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {earnings.map((data, i) => {
          return <EarningCard key={i} data={data} />;
        })}
      </div>
      <div className="row">
        <OverviewCard />
        <PieChart />
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <ProjectCard />
          <ColorCard />
        </div>
        <div className="col-lg-6 mb-4">
          <Illustration />
          <Approach />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
