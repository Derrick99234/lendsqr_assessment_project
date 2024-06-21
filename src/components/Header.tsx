import { useState } from "react";
import logo from "../assets/Group.svg";
import search from "../assets/search-icon.svg";
import profile from "../assets/image 4.png";
import profile_dropdown from "../assets/profile_dropdown.svg";
import notification from "../assets/notification-icon.svg";
import Input from "./Input";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header>
      <img src={logo} alt="" className="logo" />
      <div className="search">
        <Input
          placeholder="Search for anything"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>
          <img src={search} alt="search icon" />
        </button>
      </div>
      <div className="setting">
        <span>Docs</span>
        <img
          src={notification}
          className="notification"
          alt="notification icon"
        />
        <div>
          <img src={profile} className="profile" alt="profile image" />
          <span>
            Derrick
            <img src={profile_dropdown} alt="dropdown menu" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
