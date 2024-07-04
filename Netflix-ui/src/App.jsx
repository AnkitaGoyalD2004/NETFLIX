// import "./app.scss";
// import Home from "./pages/home/Home.jsx";
// import Login from "./pages/login/Login.jsx";
// import Register from "./pages/register/Register.jsx";
// import Watch from "./pages/watch/Watch.jsx";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* <Switch> */}
//         <Route path="/">
//           <Home />
//         </Route>
//         <Route path="/movies">
//           <Home />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Routes>
//       {/* </Switch> */}
//     </Router>
//   );
// };

// export default App;

import "./app.scss";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Watch from "./pages/watch/Watch.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
};

export default App;
