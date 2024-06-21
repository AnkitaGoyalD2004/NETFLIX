import "./watch.scss";
import { IoArrowBackSharp } from "react-icons/io5";
import Video1 from "../../assets/Video.mp4";

function watch() {
  return (
    <div className="watch">
      <div className="back">
        <IoArrowBackSharp />
        Home
      </div>
      <video className="video" autoPlay progress controls src={Video1} />
    </div>
  );
}

export default Watch;
