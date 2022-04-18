import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../Assets/images/logo/logobd.png";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
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
        <Link to="/home" className="text-decoration-none">
          <img style={{ height: "40px" }} src={logo} alt="" />
          <strong
            style={{ fontSize: "25px" }}
            className="ps-2 text-success font-bold"
          >
            BD Tour Guide
          </strong>
        </Link>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                style={{ fontWeight: "500", fontSize: "20px" }}
                className="text-decoration-none me-5"
                to="/home"
              >
                Home
              </Link>
              <Link
                style={{ fontWeight: "500", fontSize: "20px" }}
                className="text-decoration-none me-5"
                to="/services"
              >
                Services
              </Link>
              <Link
                style={{ fontWeight: "500", fontSize: "20px" }}
                className="text-decoration-none me-5"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                style={{ fontWeight: "500", fontSize: "20px" }}
                className="text-decoration-none me-5"
                to="/about"
              >
                About
              </Link>
              {user ? (
                <Link to="/login">
                  <Button
                    onClick={handleSignOut}
                    className="btn btn-danger px-4 me-4"
                  >
                    SignOut
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button className="btn btn-primary px-4">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
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
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   const [user, loading, error] = useAuthState(auth);

//   const handleSignOut = () => {
//     signOut(auth);
//   };
//   return (
//     <div className="sticky-top">
//       <Navbar bg="light" variant="light">
//         <Container className="d-flex justify-content-between">
//           <Navbar.Brand href="#home">
//             <img style={{ height: "40px" }} src={logo} alt="" />
//             <strong
//               style={{ fontSize: "25px" }}
//               className="ps-2 text-success font-bold"
//             >
//               BD Tour
//             </strong>
//           </Navbar.Brand>
//           <Nav>
//             <FontAwesomeIcon className="cart-icon me-3" icon={faCartShopping} />

//             <Link to="/home">
//               <Button className="btn btn-success px-4 me-4">Home</Button>
//             </Link>
//             <Link to="/services">
//               <Button className="btn btn-success px-4 me-4">Services</Button>
//             </Link>
//             {user ? (
//               <Link to="/login">
//                 <Button
//                   onClick={handleSignOut}
//                   className="btn btn-danger px-4 me-4"
//                 >
//                   SignOut
//                 </Button>
//               </Link>
//             ) : (
//               <Link to="/login">
//                 <Button className="btn btn-primary px-4">Login</Button>
//               </Link>
//             )}
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
