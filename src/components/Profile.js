import React from 'react'

const Profile = ({ title, description,video, image }) => {
    
    const videoHandler = () =>{
        try {
            console.log('video start', video)
            window.location.href = video;
          } catch (error) {
            console.error('Error opening video:', error);
          }
    }
    
    return (
        <div className='flex hover:shadow-lg hover:shadow-purple-500 duration-300 bg-sky-50 flex-col h-[350px] gap-3 border shadow-md p-3 rounded-lg '>
            <div className='min-h-[160px] border-2  bg-cover  ' loading='Lazy' style={{backgroundImage: `url(${image})`  }}> 
                {/* <img src={image}/> */}
             </div>
            <h1 className='text-xl text-sky-600 font-bold'>{title}</h1>
            <p className='text-sky-600 h-16  overflow-hidden text-sm '>{description.substr(50)}</p>
            <button className='bg-sky-200 mx-10 rounded-md hover:scale-95 py-2'
                onClick={videoHandler}>Play</button>

        </div>
    )
}

export default Profile