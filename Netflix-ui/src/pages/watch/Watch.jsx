// import { IoArrowBackSharp } from "react-icons/io5";
// import { Link, useLocation } from "react-router-dom";
import Video1 from "../../assets/Video.mp4";
// import "./watch.scss";
// export default function Watch() {
//   const location = useLocation();
//   const movie = location.movie;
//   if (!movie) {
//     return <div>Loading...</div>; // Add a fallback in case movie is not available
//   }
//   return (
//     <div className="watch">
//       <Link to="/">
//         <div className="back">
//           <IoArrowBackSharp />
//           Home
//         </div>
//       </Link>
//       <video className="video" autoPlay progress controls src={Video1} />
//     </div>
//   );
// }
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state?.movie; // Use optional chaining to avoid errors if state is null

  if (!movie) {
    return <div>Loading...</div>; // Add a fallback in case movie is not available
  }

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <IoArrowBackSharp />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.trailer} />
    </div>
  );
}
