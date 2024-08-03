import toast from 'react-hot-toast';
import {profileEndpoint} from '../api'
import {apiConnector} from '../connectapi'

const {CREATE_PROFILE, GET_PROFILE} =  profileEndpoint;


export const createProfile = async ( {formData, setLoading}) => {
    
    try {
        
        const toastId = toast.loading('Loading....')

        formData.forEach((value, key) => {
            console.log(key, value);
          });
    
    
      const response = await apiConnector("POST", CREATE_PROFILE, formData);

      toast.dismiss(toastId)
      
      if (!response.data.success) {
          throw new Error(response.message);
        }
        
        console.log('Profile created successfully', response);
        toast.success('Post created successfully');
        
        return response;

    } catch (err) {
      console.log('Error in creating profile...', err);
      toast.error('Error in creating profile.');
      console.error(err);
    }

   
  };
  


export const getProfile = async () => {
    try{
        const response = await apiConnector("GET",GET_PROFILE); 

        if (!response.data.success) {
            throw new Error(response.data.message)
          }

        console.log('profile fetched successfully',response)

        return response.data.data
    }catch(err){
        console.log('error in getting profile...',err)
        console.error(err)
    }
}