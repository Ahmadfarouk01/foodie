import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pasta() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const skeletonArr = [1, 2, 3, 4];

  useEffect(() => {
    setTimeout(() => {
    axios
      .get("http://localhost:3031/recipes")
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
      setLoading(true);
    }, 1000);
  }, []);
  return (
    <>
    <div className="row">
      <div className="rice__sec">
        <div className="heading">
          Pasta <span>Recipie</span>
        </div>
        <div className="resp__body">
          <div className="resp__filling">
          <>
                {loading ? (
                  <>
            {recipe.slice(4,8).map((d, i) => (
              <ul key={i} className="resp__filling--ul">
                <li key={d.id}>
                  <figure>
                  <Link to={`/Resp/${d.id}`}>
                    <img src={d.img} alt="" className="img__body--resp"/>
                    </Link>
                  </figure>
                  <div className="text-button__edit">
                  <h4 className="resp__title">
                    {d.title}
                  </h4>
                  </div>
                </li>
              </ul>
            ))}
                  </>
                ) : (
                  <>
                  {skeletonArr.map((__, index) => (
                  <ul className="resp__filling--ul">
                    <li  key={index} >
                      <figure>
                        <div className="skeleton skeleton-img"></div>
                      </figure>
                      <div className="text-button__edit">
                        <h4 className="skeleton skeleton-text"></h4>
                      </div>
                    </li>
                  </ul>
                  ))} 
                  </>
                )}
              </>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Pasta;