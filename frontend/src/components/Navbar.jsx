import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import BookedCheck from "../assets/navbar_logo.svg";
import BookedCheckImg from "../images/logo_navbar.png";
import LoggedInNavbar from "./LoggedInNavbar";
import { useNavigate, NavLink } from "react-router-dom";

import "../CSS/FilterNavbar.css";
function NavComp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-12 d-flex justify-content-between align-items-center pt-4 pe-5 ps-4  ">
        <img
          onClick={() => navigate("/")}
          style={{
            paddingRight: "100px",
            width: "max(30%, 400px)",
            cursor: "pointer"
          }}
          src={BookedCheckImg}
          alt=""
        />
        {/* <h1 className="text-center"
              style={{
                paddingRight: "100px",
                fontSize:"80px"
                }}>{BookedCheck}</h1> */}
        <div className="d-flex gap-4">
          <Button className="home-button" size="sm">
            Join Our Network
          </Button>{" "}
          <Button
            className="home-button"
            onClick={() => navigate("login/provider")}
            size="sm"
          >
            Login/Sign Up
          </Button>{" "}
        </div>
      </div>

      <Navbar className="m-auto filter-nav p-0" variant="light" expand="lg">
        <Container
          fluid
          className="p-0"
          // style={{
          //   paddingBottom: "0px",
          //   paddingInline: "50px",
          // }}
        >
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav
            className="filter-nav-row justify-content-between d-flex"
            // style={{
            //   marginLeft: "-15rem ",
            // }}
          >
            <div className=" gap-3 d-flex flex-column flex-lg-row">
              <div className="d-flex filter-nav-top ">
                <NavLink
                  to="providers/home_improvement"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Home Improvement
                </NavLink>
                <NavLink
                  to="providers/landscaping"
                  // href="#features"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Landscaping
                </NavLink>
                <NavLink
                  to="providers/automotive"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Automotive
                </NavLink>
                <NavLink
                  to="providers/personal_care"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Personal Care
                </NavLink>
              </div>
              <div className="d-flex  filter-nav-bottom ">
                <NavLink
                  to="providers/pet_care"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Pet Care
                </NavLink>
                <NavLink
                  to="providers/designer_artist"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Designer & Artist
                </NavLink>
                <NavLink
                  to="providers/events"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Events
                </NavLink>
                <NavLink
                  to="providers/technology"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Technology
                </NavLink>
              </div>
            </div>
            {/* <div className="d-flex">
              <Nav.Link
                className="text-left"
                href="#pricing"
                // style={{
                //   marginLeft: "750px",
                //   marginRight: "0px",
                // }}
              >
                About Us{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">?</Nav.Link>
            </div> */}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <LoggedInNavbar />
    </>
  );
}

export default NavComp;
