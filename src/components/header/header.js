import "./header.css";
import logo from "../../assets/logo.png";
import profileicon from "../../assets/icons/profile.png";
import downarricon from "../../assets/icons/downarr.png";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="tutedute" />
      </div>
      <ul className="navlinks">
        <li className="mob">My Assignment</li>
        <li className="mob">chat with Mentor</li>
        <li className="profile">
          <img src={profileicon} height={15} alt="p" />
          ProfileName
          <img src={downarricon} height={8} alt="d" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
