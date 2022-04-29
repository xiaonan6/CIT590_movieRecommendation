import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

function Navigation() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Navigation</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <NavDropdown title= "Recommendation" >
                                            <NavDropdown.Item href="/recommendationByRating">Recommendation By Rating</NavDropdown.Item> 
                                            <NavDropdown.Item href="/recommendationByGenres">Recommendation By Genres</NavDropdown.Item> 
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                        </Router>
                    </div>
                </div>
            </div>
        )  
}

export default Navigation;