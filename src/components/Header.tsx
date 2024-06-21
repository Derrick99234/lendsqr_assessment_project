import { useState } from "react";
import logo from "../assets/Group.svg";
import Input from "./Input";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header>
      <img src={logo} alt="" className="logo" />
      <div className="search">
        <Input
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>0</button>
      </div>
      <div>
        <span>Docs</span>
      </div>
    </header>
  );
}

export default Header;
