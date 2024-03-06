import { Link } from "react-router-dom";
import "../App.css";
// import image from "../Photos/Chrissy Teigen Thanksgiving & Christmas _ Holiday Recipes.png";

function Header() {
  return (
    <>
      <div className="header__picture">
        <div className="wrapper">
          <div className="header__desc">Best food recipies</div>
          <Link to="/Resp">
            <button className="header__button"> Explore know </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
