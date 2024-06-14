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
          <IoMdNotificationsOutline />
          <FaSearch />
          <span>KID</span>
          <IoMdNotificationsOutline />
          <img src={Profile_PiC} alt="" />
          <IoIosArrowDropdownCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
