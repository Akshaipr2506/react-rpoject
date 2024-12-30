import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'




function Project() {
  return (
    <>
      
      <div>
        <Header/>
        <h1 className='mt-4 text-center'>All Projects</h1>
        {/* not login */}
        <div className='mt-5'>
          <div className='container-fluid'>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/a78d7491269521.5e3166194e2b2.gif" alt="" className='w-100' />
                <h4 className='text-center mt-3'>Please <Link>Login</Link> to see more projects</h4>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>

        </div>


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

        <div className='container mt-5 p-1'>
          <div className="row">
            <div className="col-md-3"><ProductCard/></div>
            <div className="col-md-3"><ProductCard/></div>
            <div className="col-md-3"><ProductCard/></div>
            <div className="col-md-3"><ProductCard/></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project