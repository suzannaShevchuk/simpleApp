import React, { useState, useEffect } from 'react';
import {Card, Form, Row, Col, Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/navBar';

function CreateBug() {

    const navigate = useNavigate();

    return(
        <div>
            <NavBar />

            <Card className="mb-3" style={{width: "60%", margin: "auto" }}>
                <Card.Body>
                    <Card.Title><h3 className="login-h1">Create a bug ticket</h3></Card.Title>

                <Form className="bugForm">
                    <Row>
                        <Form.Group>
                    <Form.Control 
                        placeholder="Bug Name"  />
                        </Form.Group>
                    </Row> 
                    <br/>
                    <Row>
                        <Form.Group>
                    <Form.Control 
                        placeholder="Bug Description"  />
                        </Form.Group>
                    </Row> 
                    <br/>
                    <Row>
                        <Form.Group>
                    <Form.Select aria-label="role" placeholder='bug Type'>
                    <option value="1">Frontend</option>
                    <option value="2">Backend</option>
                    <option value="3">UI/UX</option>
                    <option value="3">Other</option>
                    </Form.Select>
                    </Form.Group>
                    </Row>  
                    <br/>
                    <Row>
                        <Form.Group>
                    <Form.Select aria-label="role" placeholder='Priority Type'>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                    </Form.Select>
                    </Form.Group>
                    </Row>   
                    <br/>
                    <Button variant="secondary" type="submit">Create Bug</Button>
                </Form>

                </Card.Body>
            </Card>


        </div>
    );
}
export default CreateBug;