import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function Project() {
  return (
    <>
      <Header/>
      <div>
        <h1 className='mt-4 text-center'>All Projects</h1>
        {/* not login */}

        {/* logged in */}
        <div className='mt-5'>
          <div className='container'>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex">
                <input type="text" placeholder='Technologies' className='shadow form-control' />
                <FontAwesomeIcon style={{color:'lightgrey',marginTop:'10px',marginLeft:'-30px'}} icon={faMagnifyingGlass} />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Project