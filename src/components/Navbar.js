import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/icon.png";

const BasicNav = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="homescreen icon"
            src={Icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
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
