import React, { useState, useEffect } from 'react';
import {Card, Form, Row, Col, Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './home.css';
import NavBar from '../../components/navBar';

function Home() {

   

    return (
        <div>
            <NavBar />
            <Row>
                <Col xs = {1}></Col>
                <Col>
                
                        <header>Recently Resolved bugs</header>
                        <hr/>

                    
                </Col>
                <Col>
                    
                        <header>Bugs assigned to me</header>
                        <hr/>
                </Col>
                <Col>
             
                        <header>Available bugs</header>
                        <hr/>
                </Col>
                <Col xs = {1}></Col>
            </Row>
        </div>
    );
}
export default Home;