import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../services/operations/profile'
import Profile from  './Profile'

const ProfileLanding = () => {

    const navigate = useNavigate()
    const [profiles, setProfiles] = useState([])
  
  
    const getprofile = async () => {
      try {
        const response = await getProfile()
        // console.log(response)
        setProfiles(response)
      } catch (error) {
        console.error(error)
      }
    }

    useEffect(()=>{
      getprofile()
    },[])

 
    

  return (
    <div >
        <div className='flex justify-center mt-10'>
            <button onClick={()=>{navigate('/createpost')}}
              className='px-5 py-3 bg-sky-100 text-sky-600 font-bold rounded-lg border-2 hover:bg-sky-200 border-sky-700'>Create Post</button>
        </div>

        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 lg:w-11/12 mt-10  mx-auto rounded-xl'>
            {
              profiles?.map((item,index)=>(
                <Profile key={index} title={item.title} description={item.description}/>
              ))
            }
        </div>
    </div>
  )
}

export default ProfileLanding