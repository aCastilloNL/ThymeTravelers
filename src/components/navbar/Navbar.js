import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
  <nav>
    <Link to="/">ABOUT US</Link>
    <Link to="/edible">EDIBLE</Link>
    <Link to="/not-edible">NOT EDIBLE</Link>
  </nav>
);

export default Navbar;
