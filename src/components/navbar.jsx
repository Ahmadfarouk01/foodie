import { Link } from "react-router-dom";
import "../App.css";
import logo from "../Photos/newlogo.jpg";

function Navbar() {
  return (
    <div className="nav_bar">
      <div className="nav__fix">
       <h1>Ahmad <span className="logo">Kitchen</span> </h1>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="nav__link--ipt">Home</Link>
          </li>
          <li className="nav__link">
            <Link to="/Resp"  className="nav__link--ipt">Recipies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
