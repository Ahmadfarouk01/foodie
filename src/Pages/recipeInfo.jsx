import { useEffect, useState } from "react";
import arrow from "../Photos/arrow.jpg";
import "../App.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
const RecipeInfo = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setTimeout(() => {
    axios
      .get(`http://localhost:3031/recipes/${params.id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="desc__sec--info">
        <Link to="/Resp">
          <img src={arrow} alt="" className="arrow__back" />
        </Link>
        <h1 className="heading">{recipe.title}</h1>
        <div className="container__info">
          <>
                {loading ? (
                  <>
          <figure>
            <img src={recipe.img} alt="" className="info__pic" />
          </figure>
          <div className="details">
            <h2 className="heading">Ingrident</h2>
            <div className="ingrident">{recipe.ingrident}</div>
            <h2 className="heading">Procedure</h2>
            <div className="steps">{recipe.procedure}</div>
          </div>
          </>
                ) : (
                  <>
                    <>
                   <figure>
                    <div className="skeleton skeleton-image"></div>
                 </figure>
                 <div className="details">
                   <h2 className="heading">Ingrident</h2>
                   <div className="skeleton skeleton-line"></div>
                   <div className="skeleton skeleton-line"></div>
                   <div className="skeleton skeleton-line"></div>
                   <h2 className="heading">Procedure</h2>
                   <div className="skeleton skeleton-line"></div>
                   <div className="skeleton skeleton-line"></div>
                   <div className="skeleton skeleton-line"></div>
                   <div className="skeleton skeleton-line"></div>
                   <div className="skeleton skeleton-line"></div>
                 </div>
                 </>
                  </>
                )}
              </>
        </div>
      </div>
    </>
  );
};

export default RecipeInfo;
