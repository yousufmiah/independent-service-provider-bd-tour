import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import logo from "../../Assets/images/logo/logobd.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        // variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img height={40} src={logo} alt="" />
            <strong
              style={{ fontSize: "25px" }}
              className="ps-2 text-success font-bold "
            >
              BD Tour Guide
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <CustomLink to="/home" className=" mx-3 navbar-text ">
                Home
              </CustomLink>

              <CustomLink to="/services" className=" mx-3 navbar-text">
                Services
              </CustomLink>

              <CustomLink to="/blogs" className="mx-3 navbar-text">
                Blogs
              </CustomLink>

              <CustomLink to="/about" className=" mx-3 me-5 navbar-text">
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
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

// import React from "react";
// import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import "./Header.css";
// import logo from "../../Assets/images/logo/logobd.png";
// import { Link } from "react-router-dom";
// import auth from "../../Firebase/Firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signOut } from "firebase/auth";
// import CustomLink from "../../CustomLink/CustomLink";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   const [user, loading, error] = useAuthState(auth);

//   const handleSignOut = () => {
//     signOut(auth);
//   };
//   return (
//     <Navbar bg="light" expand="lg" className="sticky-top">
//       <Container className="text-center">
//         <Link to="/home" className="navbar-text">
//           <img style={{ height: "40px" }} src={logo} alt="" />
//           <strong
//             style={{ fontSize: "25px" }}
//             className="ps-2 text-success font-bold "
//           >
//             BD Tour Guide
//           </strong>
//         </Link>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto ">
//             <CustomLink to="/home" className=" mx-3 navbar-text ">
//               Home
//             </CustomLink>

//             <CustomLink to="/services" className=" me-5 navbar-text">
//               Services
//             </CustomLink>
//             <CustomLink to="/blogs" className="me-5 navbar-text">
//               Blogs
//             </CustomLink>
//             <CustomLink to="/about" className=" me-5 navbar-text">
//               About
//             </CustomLink>
//             {user ? (
//               <CustomLink to="/login">
//                 <Button
//                   onClick={handleSignOut}
//                   className="btn btn-danger px-4 me-4"
//                 >
//                   SignOut
//                 </Button>
//               </CustomLink>
//             ) : (
//               <CustomLink to="/login">
//                 <Button className="btn btn-primary px-4">Login</Button>
//               </CustomLink>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
