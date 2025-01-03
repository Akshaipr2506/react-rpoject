import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Edit() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <FontAwesomeIcon icon={faPenToSquare} size="lg" onClick={handleShow} className='text-info me-4' />
        <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add Project details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="projectimage">
                                    <input type="file" id='projectimage' className='d-none' />
                                    <img src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg" alt="" className='w-100' />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <input type="text" placeholder='Title'  className='form-control mt-3'/>
                                </div>
                                <div>
                                    <input type="text" placeholder='Language'  className='form-control mt-3 '/>
                                </div>
                                <div>
                                    <input type="text" placeholder='Github'  className='form-control mt-3'/>
                                </div>
                                <div>
                                    <input type="text" placeholder='Website'  className='form-control mt-3'/>
                                </div>
                                <div>
                                    <textarea rows={5} placeholder='Overview' className='form-control mt-3'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                       Edit Project
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Edit