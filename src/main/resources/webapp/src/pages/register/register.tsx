import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Dropdown, Row, Button} from 'react-bootstrap';
import './register.css';


function Register() {
return (
    <>
      <div className="register">
            <div className="registerDiv">
            <Card className="registerCard">
                <Card.Body>
                    <Card.Title><h3 className="login-h1">Welcome to Bug-Keeper!</h3></Card.Title>
                    <Card.Text><h4>Sign up to start smashing some bugs</h4></Card.Text>

                <Form className="registerForm">
                    <Row>
                        <Form.Group>
                    <Form.Control  className="loginInput"
                        placeholder="First name" id="fname"  />
                        </Form.Group>
                    </Row> 
                    <br/>
                    <Row>
                        <Form.Group>
                    <Form.Control className="loginInput"
                        placeholder="Last name" id="lname"  />
                        </Form.Group>
                    </Row> 
                    <br/>
                    <Row>
                        <Form.Group controlId='formEmail'>
                    <Form.Control type="email"  className="loginInput"
                        placeholder="email" id="email"  />
                        </Form.Group>
                    </Row> 
                    <br/>
                    <Row>
                        <Form.Group>
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
                    {/* <Row>
                        <Form.Group>
                    <Form.Select aria-label="role" placeholder='role'>
                    <option value="1">Frontend</option>
                    <option value="2">Backend</option>
                    <option value="3">UI/UX</option>
                    </Form.Select>
                    </Form.Group>
                    </Row>   
                    <br/> */}
                    <Button variant="secondary" type="submit">Register</Button>
                </Form>

                </Card.Body>
            </Card>
            </div>
        </div>
    </>
  );
}
  export default Register;