/* eslint-disable */
import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route exact path="/">
          <div className="jum background">
            <h1>20% Season Off</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>
              <Button variantx="primary">Learn More</Button>{' '}
            </p>
          </div>

          <div className="container">
          <div className="row">
            { 
              shoes.map((a,i)=>{
              return <Card shoes={shoes[i]} i={i} />
              })
            }
          </div>
        </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        {/* <Route path="/어쩌구" component={Modal} ></Route> */}

        <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주셈</div>
        </Route>
      </Switch>
      
    </div>
  );
}



function Card(props){
  return (
    <div className="col-md-4">
      <img src={ "https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg" } width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
