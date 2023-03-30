import HomeIcon from "@mui/icons-material/Home";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// function BasicNav() {

const BasicNav = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          {/* <HomeIcon color="disabled" /> */}
          Movie Database
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/movies/popular">
              <MovieOutlinedIcon color="disabled" />
              Popular Movies
            </Nav.Link>
            <Nav.Link href="/movies/top_rated">
              <MovieOutlinedIcon color="disabled" />
              Top Rated Movies
            </Nav.Link>
            <Nav.Link href="/movies/upcoming">
              <MovieOutlinedIcon color="disabled" />
              Upcoming Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicNav;
