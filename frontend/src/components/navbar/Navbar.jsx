import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import profileImg from '../../assets/profile.png';
import "./Navbar.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="search">
          <input type="text" placeholder="search" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          
          {/* <div className="item profileImg">
            <img src={profileImg} alt="Profile" />

          </div> */}
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div className="item profileImg">
              <img src={profileImg} alt="Profile" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
