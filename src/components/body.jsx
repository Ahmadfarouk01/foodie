import "../App.css";
// import image from "../Photos/Chrissy Teigen Thanksgiving & Christmas _ Holiday Recipes.png";
import rice from "../Photos/Rice.jpeg";
import pizza from "../Photos/pizza.jpeg";
import ramen from "../Photos/rameenoddles.png";
import pasta from "../Photos/pasta.jpeg";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="row">
      <div id="body__sec">
        <h1 className="body__intro">Top Of The Table</h1>
        <div className="body__descs">
          <div className="body__desc">
          <Link to={`/Resp/3`}>
                    <img src={rice} alt="" className="img__body--resp"/>
                    </Link>
            {/* <img src={rice} alt="" className="img__body" /> */}
            <div className="text-button__edit">
              <h4 className="resp__title">Rice</h4>
              <a href="/">
                <button className="resp__button--get">Recipie</button>
              </a>
            </div>
          </div>
          <div className="body__desc">
            <img src={pizza} alt="" className="img__body" />
            <div className="text-button__edit">
              <h4 className="resp__title">pizza</h4>
              <a href="/">
                <button className="resp__button--get">Recipie</button>
              </a>
            </div>
            </div>
          <div className="body__desc">
            <img src={pasta} alt="" className="img__body" />
            <div className="text-button__edit">
              <h4 className="resp__title">pasta</h4>
              <a href="/">
                <button className="resp__button--get">Recipie</button>
              </a>
            </div>
          </div>
          <div className="body__desc">
            <img src={ramen} alt="" className="img__body" />
            <div className="text-button__edit">
              <h4 className="resp__title">cake</h4>
              <a href="/">
                <button className="resp__button--get">Recipie</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
