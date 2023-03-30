import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import BasicNav from "./components/Navbar.js";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <BasicNav />
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
