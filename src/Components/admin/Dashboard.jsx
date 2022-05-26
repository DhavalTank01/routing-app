import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="container mt-2 mb-2">
      <div className="row">
        <div className="col-2">
          <div className="h5">Admin Dashboard</div>
          <SideBar />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
