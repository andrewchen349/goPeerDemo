import React from 'react';
import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Import Pages, Componets, Resources
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';

//Other Imports
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

//firebase
import { app } from './firebase'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
      currUser: null
    }

    componentDidMount = async () => {
        //Listens for user changes
        app.auth().onAuthStateChanged(async (user) => {
            if(user){
                this.setState({currUser: user})
            }
            else{
                this.setState({currUser: null});
            }
        })
    }

    render(){
       return(
           <Router>
               <Container fluid={true}>
                   <Navbar bg="transparent" expand="lg">
                       <Navbar.Toggle aria-controls="navbar-toggle"/>
                       <Navbar.Collapse id="navbar-toggle">
                           <Nav className="ml-auto">
                               <h5><Link className="nav-link navtext" to="/">Home</Link></h5>
                               {this.state.currUser !== null ? <h5> <Button>SignOut</Button></h5> : <h5> <Link className="nav-link navtext" to="/login">Login</Link></h5>}
                           </Nav>
                       </Navbar.Collapse>
                   </Navbar>
                   <Route path="/" exact render={() => <HomePage />} />
                   <Route path="/profile" exact render={() => <Profile />} />
                   <Route path="/register" exact render={() => <Register/>} />
               </Container>
           </Router>
       );
   }
}
export default App;