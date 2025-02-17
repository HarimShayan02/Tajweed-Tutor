import {
  matchPath,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "react-phone-number-input/style.css";
import Navbar from "./Components/Navbar";
import AppRoutes from "./AppRoutes";
import Footar from "./Components/Footar";

const Layout = () => {
  const location = useLocation();
  const isOnboarding = matchPath("/onBoarding/:id/:role", location.pathname);
  return (
    <>
      {location.pathname !== "/admin" &&
        location.pathname !== "/admin-dashboard" && <Navbar />}
      <AppRoutes />
      {location.pathname !== "/admin" &&
        !isOnboarding &&
        location.pathname !== "/admin-dashboard" && <Footar />}
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
