import "./listItem.scss";
import { FaPlay } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Video from "../../assets/Video.mp4";
import HarryPotter from "../../assets/HarryPotter.jpeg";
import { useState } from "react";
function listItem(index) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItems"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={HarryPotter} alt="" />
      {isHovered && (
        <>
          <video src={Video} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <FaPlay />
              <IoMdAdd />
              <AiOutlineLike />
              <AiOutlineDislike />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
export default listItem;
