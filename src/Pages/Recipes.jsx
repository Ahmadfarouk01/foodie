import "../App.css";
import Rice from "../components/com/Rice";
import Pasta from "../components/com/pasta";
import Ramen from "../components/com/ramen";

const Resp = () => {
  return (
    <div className="resp__background">
      <div className="heading__resp">
        Select your best <span>Recipie</span>
      </div>
      <Rice />
      <Pasta />
      <Ramen />
    </div>
  );
};

export default Resp;
