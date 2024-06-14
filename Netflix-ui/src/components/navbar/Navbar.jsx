import "./navbar.scss";
import Netflix from "../../../public/images/Netflix.jpeg";
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
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
