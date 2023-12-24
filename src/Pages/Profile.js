import React from 'react'
import './Profile.css'
import { Button } from '@mui/material'

const Profile = () => {
  return (
    <div>
        <div>
            <div className='outercard'>
                <img src='https://images.unsplash.com/photo-1683009427513-28e163402d16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='innercard'>
                <div className='profileimg'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'/>
                <div class='name'>Marry jon</div>
                <div className='btn'>
                    <Button>Edit Profile</Button>
                    <Button>Add Post</Button>

                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
