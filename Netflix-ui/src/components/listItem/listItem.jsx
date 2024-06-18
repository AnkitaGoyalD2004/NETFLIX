import "./listItem.scss";
import HarryPotter from "../../assets/HarryPotter.jpeg";
function listItem() {
  return (
    <div className="listItems">
      <img src={HarryPotter} alt="" />
    </div>
  );
}
export default listItem;
