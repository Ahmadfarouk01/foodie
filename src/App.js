import "./App.css";
import Home from "./Pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resp from "./Pages/Recipes";
import Navbar from "./components/navbar";
import RecipeInfo from "./Pages/recipeInfo";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Resp" element={<Resp />} />
          <Route path="/Resp/:id" element={<RecipeInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
