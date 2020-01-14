import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(

        <footer className='mt-5'> {/* This is a component*/}
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'> {/* We will need to import each of this elements from bootstrap */}
                    <Col className='p-0' md={3} sm={12}>
                        Mireia Palmero
                    </Col>
                    <Col className='p-0 d-flex justify-content-end'  md={3}>
                        Copyright ©2020 - Mireia Palmero, All Rights Reserved
                    </Col>
                </Row>
            </Container>

        </footer>
    );

}

export default Footer;