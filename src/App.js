 import React from 'react'
import ProfileLanding from './components/ProfileLanding'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
 
 const App = () => {
   return (
     <div className='bg-gray-100 border'>
        <Routes>
          <Route path='/' element={  <ProfileLanding/>} />
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
     </div>
   )
 }
 
 export default App