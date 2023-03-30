import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar.js";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
