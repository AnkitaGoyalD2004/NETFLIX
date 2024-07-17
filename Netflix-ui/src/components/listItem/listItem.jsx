import "./listItem.scss";
import { FaPlay } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8200/api/movies/find/" + item,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODIzMmM4OGQxMTU4NmY2NDNhMWFkMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMTA0NTQyMiwiZXhwIjoxNzIxNDc3NDIyfQ.aPFpmTkKnvVUrhV8kGULCFaMg9tADO0uEqLlyNAqVjE",
            },
          }
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <FaPlay className="icon" />
                <IoMdAdd className="icon" />
                <AiOutlineLike className="icon" />
                <AiOutlineDislike className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
export default ListItem;
