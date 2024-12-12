import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <>
            <Navbar className="bg-success d-flex align-items-center">
                <Container>
                    <Navbar.Brand>
                    <span className='text-light fs-3'><FontAwesomeIcon icon={faStackOverflow} size="xl" style={{color: "#ffffff",}} className='me-4' />Project Fair</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header