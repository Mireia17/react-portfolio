import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage  from './pages/ContactPage';
import Hero  from './components/Hero';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: 'Mireia Palmero',
    headerLinks: [
      { title: 'Home', path: '/'},
      { title: 'About', path: '/about'},
      { title: 'Contact', path: '/contact'},
    ],

    home: { //this is an object
      title: "Hello, I'm Mireia",
      subTitle: 'I like to make great things happen',
      text: 'Checkout my projects below',

    },

    about: { //this is an object
      title: "About me"
    },
    contact: { //this is an object
      title: 'Contact me'
    }
  }
}

  render() {

    return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>Mireia Palmero</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls="navbar-toggle"/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'> {/*  this is not bootstrap this is actually react */}
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render = {() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} /> {/*I don't understand the "state" here */}
          <Route path='/about' render = {() => <AboutPage title={this.state.about.title}/>}/> 
          <Route path='/contact' render = {() => <ContactPage title={this.state.contact.title}/>}/> 
          <Footer/>
      </Container>
      </Router>
    

    
      );
  }
  
}

export default App;
