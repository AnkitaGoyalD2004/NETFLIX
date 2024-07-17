import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import Video1 from "../../assets/Video.mp4";

export default function Watch() {
  const location = useLocation();
  console.log(location);
  // const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <IoArrowBackSharp />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={Video1} />
    </div>
  );
}
