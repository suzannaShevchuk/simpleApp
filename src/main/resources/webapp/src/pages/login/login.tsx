import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Row, Col, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {

    const navigate = useNavigate();

    const register = () => {
        navigate('/register'); 
      };
      const login = () => {
        navigate('/home'); 
      };


return (
    <>
      <div className="login">
            <div className="loginDiv">
            <Card className="loginCard">
                <Card.Body>
                    <Card.Title><h3 className="login-h1">Welcome to Bug-Keeper!</h3></Card.Title>
                    <Card.Text><h4>Sign in to smash some bugs</h4></Card.Text>

                <Form className="loginForm">
                    <Row>
                        <Form.Group controlId='formUsername'>
                    <Form.Control type="username"  className="loginInput"
                        placeholder="username" id="username"  />
                        </Form.Group>
                    </Row>  
                    <br/>
                    <Row>
                        <Form.Group controlId='formPassword'>
                    <Form.Control type="password"  className="loginInput"
                        id="password" placeholder="password"  />
                        </Form.Group>
                    </Row>    
                    <br/>
                    <Button variant="secondary" onClick={login} type="submit">Login</Button>
                </Form>
                <Button variant="link" onClick={register}>Don't have an account? Sign up</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    </>
  );
}
  export default Login;