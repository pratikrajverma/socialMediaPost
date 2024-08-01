import toast from 'react-hot-toast';
import {profileEndpoint} from '../api'
import {apiConnector} from '../connectapi'

const {CREATE_PROFILE, GET_PROFILE} =  profileEndpoint;


export const createProfile = async (data) =>{
    try{
        const response = await apiConnector("POST",CREATE_PROFILE,data);
        
        if(!response.data.data.success){
            throw new Error(response.message);
        }

        console.log('profile created successfully',response)
        toast.success('Post created successfully')

        return response ;
    }catch(err){
        console.log('error in creating profile...',err)
        console.error(err)
    }
}

export const getProfile = async () => {
    try{
        const response = await apiConnector("GET",GET_PROFILE);

        if(!response.data.success){
            throw new Error(response.message);
        }

        console.log('profile fetched successfully',response)

        return response.data.data
    }catch(err){
        console.log('error in getting profile...',err)
        console.error(err)
    }
}