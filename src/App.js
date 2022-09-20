import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import CocktailDetail from "./pages/CocktailDetail";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktaildetail/:id" element={<CocktailDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
