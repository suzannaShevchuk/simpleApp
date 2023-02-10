import React, { useState, useEffect } from 'react';
import {Card, Form, Row, Col, Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/navBar';

function Profile() {

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

      const logout = () => {
        navigate('/');
      };

    return (
        <div>
            
            <NavBar />
            <div>Profile</div>
            <Button onClick={logout} variant="secondary">Logout</Button>
        </div>
    );
}
export default Profile;