import React, { useState, useEffect } from 'react';
import {Card, Form, Row, Col, Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/navBar';

function BugCard() {

    const navigate = useNavigate();

    return(
        <div>
            <Card>
                        <Card.Title>Placeholder issue</Card.Title>
                        <Card.Text>place holder issue type</Card.Text>
                        <Card.Text>place holder assignee</Card.Text>
                        <Card.Text>Priority Color</Card.Text>
            </Card>
        </div>
    );
}
export default BugCard;