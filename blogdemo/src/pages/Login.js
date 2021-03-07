import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { app } from '../firebase';
import { Link, withRouter } from "react-router-dom";


class Login extends React.Component{
    render(){
        <Form onSubmit={this.handleRegiser}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={this.onChange}
                id="email"
                    />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={this.onChange}
                    id="password" />
            </Form.Group>
            <Button variant="primary" type="submit" >
            Submit
            </Button>
        </Form>
    }
}
export default (withRouter(Login));