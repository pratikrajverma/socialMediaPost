import React from 'react'

const Profile = ({ title, description }) => {
    return (
        <div className='flex hover:shadow-lg hover:shadow-purple-500 duration-300 bg-sky-50 flex-col h-[350px] gap-3 border shadow-md p-3 rounded-lg '>
            <div className='min-h-[160px] border-2'>  </div>
            <h1 className='text-xl text-sky-600 font-bold'>{title}</h1>
            <p className='text-sky-600 h-16  '>{description}</p>
            <button className='bg-sky-200 mx-10 rounded-md hover:scale-95 py-2'>Play</button>

        </div>
    )
}

export default Profile