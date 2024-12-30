import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Profile() {
    return (
        <>
            <div className='p-4 shadow'>
                <div className='d-flex justify-content-between'>
                    <h3 className='text-success'>Profile</h3>
                    <button className='btn'><FontAwesomeIcon icon={faAngleUp} size="2xl" /></button>
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <label htmlFor="profileimage" className='d-flex justify-content-center align-items-center'>
                        <input type="file" id='profileimage' className='d-none' />
                        <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="" className='w-75' />
                    </label>
                    <div className='w-100'>
                        <div className='mb-3'><input type="text" placeholder='Github' className='form-control' /></div>
                        <div className='mb-4'><input type="text" placeholder='Linkedin' className='form-control' /></div>
                        <div className='mb-3 text-center'><button className='btn btn-success w-75'>Update Profile</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile