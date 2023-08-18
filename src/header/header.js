import React from 'react';
import './header.css';
import {Nav,Navbar,Container, Button, Form, Row, Col} from "react-bootstrap"
import logo from "../Logo Site.png"
import headerlogo from "./headerlogo.png"


const header = () => {
return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src={logo}
                    width="200"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"/>
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#features">Nos offres</Nav.Link>
                    <Nav.Link href="#pricing">Nos résidences</Nav.Link>
                    <Nav.Link href="#pricing">Passez sa retraite en Tunisie</Nav.Link>
                    <Nav.Link href="#pricing">Nos services</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    <div className="intro">
        <img src={headerlogo} alt="Logo de Silver Resorts" width="150px"></img>
        <h1 className='titre'>Maison de retraite et EHPAD en Tunisie</h1>
        <br></br>
        <div className='recherche'>
            <Form inline>
            <Row>
                <Col xs="auto">
                <Form.Control
                    type="text"
                    placeholder="Saisissez une ville, un pays..."
                    className=" mr-sm-2"
                />
                </Col>
                <Col xs="auto">
                <Button type="submit">Rechercher</Button>
                </Col>
            </Row>
            </Form>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <a href="mailto:contact@silver-resorts.com">
            <button>
                <span class="fa-solid fa-envelope"></span> Envoyez-nous un email
            </button>
        </a>
        <a href="tel:0033601034149">
            <button>
                <i class="fa-solid fa-mobile-screen" aria-hidden="true"></i>
                Appelez-nous
            </button>
        </a>
        
        <hr></hr>
        </div>
    </div>
    )
}

export default header