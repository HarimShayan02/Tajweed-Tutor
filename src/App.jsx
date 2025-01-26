import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "react-phone-number-input/style.css";
import Navbar from "./Components/Navbar";
import AppRoutes from "./AppRoutes";
import Footar from "./Components/Footar";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/admin" ||
        (location.pathname !== "/onBoarding" && <Navbar />)}
      <AppRoutes />
      {location.pathname !== "/admin" ||
        (location.pathname !== "/onBoarding" && <Footar />)}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
