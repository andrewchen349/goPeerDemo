import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { app } from '../firebase';
import { Link, withRouter } from "react-router-dom";

class Home extends React.Component{
    state = {
        email: '',
        userName: '',
        password: ''
        
    }

    handleRegiser = async (e) => {
        e.preventDefault();
        console.log("button")
        console.log(this.state)
        await app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            console.log("here")
            this.props.history.push("/profile")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    render(){
        return(
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
            
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" onChange={username => this.setState({userName: username})} />
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
        )
    }
}
export default (withRouter(Home));



