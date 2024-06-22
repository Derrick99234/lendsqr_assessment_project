// import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import users from "../assets/iconuser.png";
import active_user from "../assets/iconactive user.png";
import loan from "../assets/iconloans.png";
import saving from "../assets/iconsavings.png";

function Dashboard() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Header />
        <main>
          <h2>Users</h2>
          <div className="users">
            <div className="box">
              <img src={users} alt="" />
              <span>USERS</span>
              <strong>2,453</strong>
            </div>
            <div className="box">
              <img src={active_user} alt="" />
              <span>ACTIVE USERS</span>
              <strong>2,453</strong>
            </div>
            <div className="box">
              <img src={loan} alt="" />
              <span>USERS WITH LOANS</span>
              <strong>12,453</strong>
            </div>
            <div className="box">
              <img src={saving} alt="" />
              <span>USERS WITH SAVINGS</span>
              <strong>102,453</strong>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
