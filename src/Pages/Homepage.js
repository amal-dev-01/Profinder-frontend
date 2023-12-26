import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Box } from '@mui/material'
import Navbar from './Navbar'
// import './Homepage.css'

const Homepage = () => {
    const {logout}=useContext(AuthContext)
    const webStyles = {
      backgroundImage: "url(https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      backgroundSize: 'cover',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: '#fff', // Text color
      fontSize: '2rem', // Adjust the font size
      textAlign: 'center', // Center the text
      padding: '20px', // Add some padding for better readability
    };
  
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div style={webStyles}>
      <p>Connect with</p>
      <br />
      <p>Professional</p>
    </div>
        <button onClick={logout}>logout</button>
        <Box>
        <Box>
      
        </Box>
        </Box>

    </div>
  )
}

export default Homepage