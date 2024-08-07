import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";

function Home({ type }) {
//   const [lists, setLists] = useState([]);
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre" + genre : ""}`,
          {
            headers: {
            },
          }
        );
        // console.log("API Response:", res.data);
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
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list}  />
      ))}
    </div>
    // <div className="home">
    //   <Navbar />
    //   <Featured type={type} />
    //   {/* <List />
    //   <List />
    //   <List />
    //   <List />
    //   <List />
    //   <List />
    //   <List />
    //   <List />
    //   <List /> */}
    //   {/* instead of this list */}

    //   {/* {lists.length > 0 ? (
    //     lists.map((list) => <List list={list} key={list.id} />)
    //   ) : (
    //     <p>Loading...</p>
    //   )} */}

    // </div>
  );
}

export default Home;
