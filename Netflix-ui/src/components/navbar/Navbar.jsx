import "./navbar.scss";
import Netflix from "../../assets/logo_Netflix.png";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile_PiC from "../../assets/Profile_PiC.jpeg";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={Netflix} alt="" />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <FaSearch className="icon" />
          <span>KID</span>
          <IoMdNotificationsOutline className="icon" />
          <img src={Profile_PiC} alt="" />
          <div className="profile">
            <IoIosArrowDropdownCircle className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
