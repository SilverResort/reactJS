import React from 'react';
import './App.css';
import {Nav,Navbar,Container, Card, Button, Form, Row, Col} from "react-bootstrap"
import elbosten from "./elbosten.webp"
import Erriadh from "./Erriadh.webp"
import SidiBou from "./SidiBou.webp"
// import favicon from "./favicon.png"
import logo from "./Logo Site.png"
import footerlogo from "./Footer_1.png"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div className="App">
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
        <img src={footerlogo} alt="Logo de Silver Resorts" width="150px"></img>
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
      
      
      <br></br>
      <h3>Vous n’avez pas choisi votre travail, choisissez votre retraite</h3>
      <h2>Nos résidences sénior en Tunisie</h2>
      <br></br>
    <div className="cards">

      <div className="card">
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={Erriadh}/>
          <Card.Body>
            <Card.Title>Le Riad</Card.Title>
            <Card.Text>
            La résidence sénior Le Riad et son style architectural éclectique, conjugue avec charme, les inspirations andalouses au style iranien
            </Card.Text>
            <Button variant="primary">Réserver</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="card">
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={SidiBou}/>
          <Card.Body>
            <Card.Title>Sidi Bousaïd</Card.Title>
            <Card.Text>
            La résidence sénior Sidi Bousaid vous fera découvrir l’ambiance feutrée, en bleu et blanc, du célèbre village tunisien
            </Card.Text>
            <Button variant="primary">Réserver</Button>
          </Card.Body>
        </Card>
      </div>
        
      <div className="card">
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={elbosten} />
          <Card.Body>
            <Card.Title>Le Verger</Card.Title>
            <Card.Text>
            La résidence senior Le verger aux couleurs chatoyantes, est une invitation au voyage au cœur de l’art hispano-mauresque
            </Card.Text>
            <Button variant="primary">Réserver</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    <br></br>
    <hr></hr>
    
      <br></br>
      <h2> Contactez-nous</h2>
      <div className='formulaire'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adresse Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Votre texte</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </div>

    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <hr></hr>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Silver Resorts
              </h6> */}
              <img src={footerlogo} alt="Logo de Silver Resorts" width="200px"></img>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                30/32, boulevard de Sébastopol 75004 Paris, France
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto:contact@silver-resorts.com">contact@silver-resorts.com</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> <a href="tel:0033970449988">+33 (0)9 70 44 99 88</a>
              </p>
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
        <a className='text-reset fw-bold' href='https://www.silver-resorts.com/'>
          Silver-Resorts.com
        </a>
      </div>
    </MDBFooter>


    </div>
  );
}




export default App;
