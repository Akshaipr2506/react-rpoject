import React from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'

function Myproject() {
  return (
    <div className=' p-5  shadow-lg'>
        <div className='d-flex justify-content-between'>
        <h3>My Project</h3>
       <Addproject/>
        </div>
        <div className='p-3 bg-light d-flex align-items-center justify-content-between rounded mt-3'>
            <h4>Project Name</h4>
            <div className='d-flex '>
                <Edit/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='me-4 text-warning' />
                <FontAwesomeIcon icon={faGlobe} size="lg" className='me-4 text-success' />
                <FontAwesomeIcon icon={faTrash} size="lg" className='me-4 text-danger' />
            </div>
        </div>
        <div className='p-3 bg-light d-flex align-items-center justify-content-between rounded mt-3'>
            <h4>Project Name</h4>
            <div className='d-flex '>
                <Edit/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='me-4 text-warning' />
                <FontAwesomeIcon icon={faGlobe} size="lg" className='me-4 text-success' />
                <FontAwesomeIcon icon={faTrash} size="lg" className='me-4 text-danger' />
            </div>
        </div>
    </div>
  )
}

export default Myproject