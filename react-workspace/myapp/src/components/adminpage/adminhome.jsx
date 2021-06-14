import React from "react";
import Adminsidebar from "./adminsidebar";
import Content from "./content";

const AdminHome = () =>{

  return (
    <div>
      <div className="row container-fluid">
        <div className="col-md-3">
          <Adminsidebar />
        </div>
        <div className="col-md-9">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;