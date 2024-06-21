import "./listItem.scss";
import { FaPlay } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Video1s from "../../assets/Video.mp4";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import HarryPotter from "../../assets/HarryPotter.jpeg";
import { useState } from "react";
function listItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={HarryPotter} alt="" />
      {isHovered && (
        <>
          <video src={Video1} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <FaPlay className="icon" />
              <IoMdAdd className="icon" />
              <AiOutlineLike className="icon" />
              <AiOutlineDislike className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
export default listItem;
