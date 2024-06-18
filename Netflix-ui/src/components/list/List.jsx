import "./list.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ListItem from "../listItem/listItem.jsx";
import { useRef, useState } from "react";
import React from "react";

function List() {
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef(null);
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === " left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      console.log(slideNumber);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === " right" && slideNumber > 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <IoIosArrowBack
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <IoIosArrowForward
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
