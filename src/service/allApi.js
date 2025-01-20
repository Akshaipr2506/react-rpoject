import { commonApi } from "./commonApi"
import { serverUrl } from "./serviceUrl"

//register request
export const requestApi= async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/register`,reqBody,"")
}

//login
export const loginApi= async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/login`,reqBody,"")
}

//add project
export const addProjectApi = async(reqBody,reqHeader)=>{
    return await commonApi("POST",`${serverUrl}/addproject`,reqBody,reqHeader) 
}

//get home project
export const getHomeProjectApi=async()=>{
    return await commonApi('GET',`${serverUrl}/home-project`)
}

//get all projects
export const getAllProjectApi=async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-project?search=${searchKey}`,"",reqHeader)
}

//get user project
export const getUserProjectApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/user-project`,"",reqHeader)
}
export const deleteproject = async(id,reqHeader)=>{
    return await commonApi("DELETE",`${serverUrl}/remove-userproject/${id}`,{},reqHeader)
}
//api to update project
export const updateUserProjectApi=async(id,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-userproject/${id}`,reqBody,reqHeader)
}

//api to updateprofile
export const updateUserProfileApi=async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-userprofile`,reqBody,reqHeader)
}