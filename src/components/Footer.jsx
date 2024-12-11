import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <>
        <div className='w-full bg-success container-fluid p-5'>
            <div className="row">
                <div className="col-md-4">
                    <h2 className='text-white'> <FontAwesomeIcon className='me-3' icon={faStackOverflow} />Project Fair</h2>
                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo culpa, error iure modi deleniti, tempora laborum velit id eveniet in sed voluptatum! Quidem recusandae reprehenderit esse adipisci, quam illum ea?</p>
                </div>
                <div className="col-md-2">
                    <h2 className='text-white'>Guides</h2>
                    <div>
                        
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </>
  )
}

export default Footer