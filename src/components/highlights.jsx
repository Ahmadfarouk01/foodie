import "../App.css";
import picone from "../Photos/Premium Vector _ Chef logo template design.jpg";
import pictwo from "../Photos/Download world planet earth line style icon for free.jpg";
import picthree from "../Photos/Wind weather lines group symbol ⋆ Free Vectors, Logos, Icons and Photos Downloads.png";

function Highlights() {
  return (
    <>
      <div className="row">
          <h1 className="Highlights__intro" >Why you should Trust us you ask ??</h1>
        <div className="highlights__sec">
          <div className="highliths__desc">
            <img src={picone} alt="" className="highlight__img" />
            <div className="highlight__img--desc">
              Best recipies from the best chefs 
            </div>
          </div>
          <div className="highliths__desc">
            <img src={pictwo} alt="" className="highlight__img" />
            <div className="highlight__img--desc">
              Best recipies from all over the world
            </div>
          </div>
          <div className="highliths__desc">
            <img src={picthree} alt="" className="highlight__img" />
            <div className="highlight__img--desc">
              Quick and fast food recipies
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Highlights;
