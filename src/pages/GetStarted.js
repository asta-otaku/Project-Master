import React from "react";
import Main from "../components/Dashboard/Main";
import Sidebar from "../components/Dashboard/Sidebar";

function GetStarted() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default GetStarted;
