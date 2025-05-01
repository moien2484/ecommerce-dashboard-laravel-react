import React from "react";
import CmsMenu from "../../component/CmsMenu/CmsMenu";

import { Outlet } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="parent-cms">
        <div className="parent-cms-menu">
          <CmsMenu />
        </div>
        <div className="container">
          <div className="content-dashboard">

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
