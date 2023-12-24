import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Box } from '@mui/material'
import Navbar from './Navbar'

const Homepage = () => {
    const {logout}=useContext(AuthContext)
  return (
    <div>
      <header>
        <Navbar/>
      </header>
        <h1>Home page</h1>
        <button onClick={logout}>logout</button>
        <Box>
        <Box>
      
        </Box>
        </Box>

    </div>
  )
}

export default Homepage