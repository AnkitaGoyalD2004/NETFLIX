import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre" + genre : ""}`,
          {
            headers: {
              token: "Bearer",
            },
          }
        );
        console.log("API Response:", res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {/* <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List /> */}
      {/* instead of this list */}
      {Array.isArray(lists) ? (
        lists.map((list) => <List key={list._id} list={list} />)
      ) : (
        <p>No lists available</p>
      )}
    </div>
  );
}

export default Home;
