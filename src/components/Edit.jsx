import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../service/serviceUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProjectApi } from '../service/allApi';
import { editProjectResponse } from '../context/ContextShare';



function Edit({ project }) {
    const {setEditResponse}=useContext(editProjectResponse)

    const [show, setShow] = useState(false);
    //console.log(project);
    const [preview, setPreview] = useState("")
    const [key, setKey] = useState(1)

    const [projectDetails, setProjectDetails] = useState({
        title: project.title,
        language: project.language,
        github: project.github,
        website: project.website,
        overview: project.overview,
        projectImage: ""
    })
    console.log(projectDetails);

    const handleCancel = () => {
        setProjectDetails({
            title: project.title,
            language: project.language,
            github: project.github,
            website: project.website,
            overview: project.overview,
            projectImage: ""
        })
        setPreview("")
        if (key == 1) {
            setKey(0)
        }
        else {
            setKey(1)
        }
    }


    const handleFile = (e) => {
        console.log(e.target.files);
        setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })
    }

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    const handleUpdate = async () => {
        const { title, language, github, website, overview, projectImage } = projectDetails
        if (!title ||!language|| !github|| !website|| !overview) {
            toast.info('Fill the form completely')
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("language", language)
            reqBody.append("github", github)
            reqBody.append("website", website)
            reqBody.append("overview", overview)
            preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", project.projectImage)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "COntent-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateUserProjectApi(project._id, reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    setEditResponse(result)
                    toast.success('project updated successfully')
                    setTimeout(() => {
                        handleClose()
                    }, 2000)
                }
                else {
                    toast.error('something went wrong')
                    handleCancel()
                }

            } else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
                const result = await updateUserProjectApi(project._id, reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    setEditResponse(result)
                    toast.success('project updated successfully')
                    setTimeout(() => {
                        handleClose()
                    }, 2000)
                }
                else {
                    toast.error('something went wrong')
                    handleCancel()
                }
            }
        }


    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <FontAwesomeIcon icon={faPenToSquare} size="lg" onClick={handleShow} className='text-info me-4' />
            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Edit Project details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="projectimage">
                                    <input key={key} onChange={(e) => handleFile(e)} type="file" id='projectimage' className='d-none' />
                                    <img src={preview ? preview : `${serverUrl}/upload/${project.projectImage}`} alt="" className='w-100' />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <input onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} value={projectDetails.title} type="text" placeholder='Title' className='form-control mt-3' />
                                </div>
                                <div>
                                    <input onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} value={projectDetails.language} type="text" placeholder='Language' className='form-control mt-3 ' />
                                </div>
                                <div>
                                    <input onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} value={projectDetails.github} type="text" placeholder='Github' className='form-control mt-3' />
                                </div>
                                <div>
                                    <input onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} value={projectDetails.website} type="text" placeholder='Website' className='form-control mt-3' />
                                </div>
                                <div>
                                    <textarea onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} value={projectDetails.overview} rows={5} placeholder='Overview' className='form-control mt-3'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' autoClose={2000} theme="colored" />
        </>
    )
}

export default Edit