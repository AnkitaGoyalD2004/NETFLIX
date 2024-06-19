import "./listItem.scss";
import { FaPlay } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

import HarryPotter from "../../assets/HarryPotter.jpeg";
function listItem() {
  return (
    <div className="listItems">
      <img src={HarryPotter} alt="" />
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
    </div>
  );
}
export default listItem;
