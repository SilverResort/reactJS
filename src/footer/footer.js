import React from 'react'
import footerlogo from "./Footer_1.png"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const footer = () => {
return (
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

    )
}

export default footer