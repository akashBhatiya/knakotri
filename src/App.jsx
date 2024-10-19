import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import bg1 from "./kc1/bg1.png";
import bg3 from "./kc1/bg3.png";
import bg4 from "./kc1/bg4.png";
import bg5 from "./kc1/bg5.png";
import bg6 from "./kc1/bg6.png";
import bg7 from "./kc1/bg7.png";
import bg8 from "./kc1/bg8.png";

const Home = () => {
  const location = useLocation();

  // Function to get query parameters
  const getQueryParams = (search) => {
    const params = new URLSearchParams(search);
    return {
      guestFirstName: params.get("guestFirstName"), // Get the guest name from query params
      guestLastName: params.get("guestLastName"),
    };
  };

  // Extract guest name from URL query parameters
  const { guestFirstName, guestLastName } = getQueryParams(location.search);

  return (
    <div className="App">
      <div>
        <p className="guestName">
          {guestFirstName || "Guest"} &nbsp;{guestLastName || "LastName"}
        </p>{" "}
        {/* Display guest name */}
        <img src={bg1} alt="" className="imageCont" />
      </div>
      <div>
        <img src={bg3} alt="" className="imageCont" />
      </div>
      <div>
        <img src={bg4} alt="" className="imageCont" />
      </div>
      <div>
        <img src={bg5} alt="" className="imageCont" />
      </div>
      <div>
        <img src={bg6} alt="" className="imageCont" />
      </div>
      <div>
        <img src={bg7} alt="" className="imageCont" />
      </div>
      <div>
        <img src={bg8} alt="" className="imageCont" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
