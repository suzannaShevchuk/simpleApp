import React, { useState, useEffect } from 'react';
import {Card, Form, Row, Col, Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './navBar.css';

function NavBar(){

    const navigate = useNavigate();

    const create = () => {
        navigate('/create'); 
      };
      const home = () => {
        navigate('/home'); 
      };
      const profile = () => {
        navigate('/profile'); 
      };

    return(

        <Navbar bg="light" expand="lg" className='nav'>
        <Container>
            <Navbar.Brand>Bug-Keeper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={home}>Home</Nav.Link>
                <Nav.Link onClick={create}>Create bug</Nav.Link> 
                <Nav.Link onClick={profile}>Profile</Nav.Link>       
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    );
}
export default NavBar;