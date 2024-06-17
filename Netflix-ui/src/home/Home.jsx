import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Series" />
      <List />
    </div>
  );
}

export default Home;
