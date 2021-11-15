import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/files/logo.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  // const { displayName, photoURL, email, uid } = user;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://frozen-forest-53567.herokuapp.com/myOrders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  console.log(parseInt(orders.length));

  return (
    <div className="">
      <Navbar fixed="top" style={{ backgroundColor: "gray" }} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="text-black fw-bold" to="/home">
            <img width="150px" alt="Logo" src={logo} />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-black fw-bold">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="text-black fw-bold">
                About
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/services"
                className="text-black fw-bold"
              >
                Products
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/servicesMore"
                className="text-black fw-bold"
              >
                More Products
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/purchase"
                className="text-black fw-bold"
              >
                Purchase
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/contact"
                className="text-black fw-bold"
              >
                Contact
              </Nav.Link>

              {!user.displayName ? (
                <>
                  <Nav.Link
                    className="text-black fw-bold"
                    as={NavLink}
                    to="/login"
                  >
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/dashboard"
                    className="text-black fw-bold"
                  >
                    Dashboard
                  </Nav.Link>
                  <NavLink to="/dashboard" style={{ marginLeft: "15px" }}>
                    <IconButton>
                      <Badge
                        badgeContent={parseInt(orders?.length)}
                        color="error"
                      >
                        <ShoppingCartIcon
                          fontSize="large"
                          style={{ color: "black" }}
                        />
                      </Badge>
                    </IconButton>
                  </NavLink>

                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: "45px",
                          borderRadius: "50%",
                        }}
                        src={user.photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center">
                      <h6>{user.displayName}</h6>
                      <p className="m-0 mb-2">{user.email}</p>
                      <button onClick={logOut} className="btn btn-danger">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
