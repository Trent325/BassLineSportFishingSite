import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/basslineslogo.jpg"; // Assuming basslineslogo.jpg is in the same directory as this component

const NavBar: React.FC = () => {
  return (
    <Navbar bg="white" variant="light" expand="md" className="pb-0">
      <div className="flex items-end">
        <img src={logo} alt="Logo" style={{ height: '100px' }} />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-4">
          <Nav.Link href="/" className="text-black font-bold hover:bg-gray-200 py-2 px-3 rounded-md">
            Home
          </Nav.Link>
          <Nav.Link href="/AboutUs" className="text-black font-bold hover:bg-gray-200 py-2 px-3 rounded-md">
            About Us
          </Nav.Link>
          <Nav.Link href="/Charters" className="text-black font-bold hover:bg-gray-200 py-2 px-3 rounded-md">
            Charters We Offer
          </Nav.Link>
          <Nav.Link href="/Trips" className="text-black font-bold hover:bg-gray-200 py-2 px-3 rounded-md">
            Trips
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
