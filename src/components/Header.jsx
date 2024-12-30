import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <div>
                <Navbar className="bg-success d-flex align-items-center" fixed='top'>
                    <Container>
                        <Navbar.Brand>
                            <Link to={'/'} className='text-decoration-none'> <span className='text-light fs-3'><FontAwesomeIcon icon={faStackOverflow} size="xl" style={{color: "#ffffff",}} className='me-4' />Project Fair</span></Link>
                        </Navbar.Brand>
                        <Link><button className='btn btn-warning rounded'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button> </Link>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header