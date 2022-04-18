import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../Assets/images/logo/logobd.png";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container className="d-flex justify-content-between">
        <Link to="/home" className="navbar-text">
          <img style={{ height: "40px" }} src={logo} alt="" />
          <strong
            style={{ fontSize: "25px" }}
            className="ps-2 text-success font-bold "
          >
            BD Tour Guide
          </strong>
        </Link>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              {user && (
                <CustomLink to="/home" className=" me-5 navbar-text ">
                  Home
                </CustomLink>
              )}
              <CustomLink to="/services" className=" me-5 navbar-text">
                Services
              </CustomLink>
              <CustomLink to="/blogs" className="me-5 navbar-text">
                Blogs
              </CustomLink>
              <CustomLink to="/about" className=" me-5 navbar-text">
                About
              </CustomLink>
              {user ? (
                <CustomLink to="/login">
                  <Button
                    onClick={handleSignOut}
                    className="btn btn-danger px-4 me-4"
                  >
                    SignOut
                  </Button>
                </CustomLink>
              ) : (
                <CustomLink to="/login">
                  <Button className="btn btn-primary px-4">Login</Button>
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
