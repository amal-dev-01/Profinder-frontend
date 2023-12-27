import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Box, Button } from '@mui/material'
import Navbar from './Navbar'
import './Homepage.css'

const Homepage = () => {
  const { logout } = useContext(AuthContext)


  return (
    <div>
      <header>
        <Navbar />
  
      </header>
      <div>
      <div className='maindiv'>
        <div className='fname'>
          Connect with Professional
        </div>
      </div>

      <div className='titlepage'>

        <div className='titlecard' >
        Connecting needs with expertise, one job at a time
        </div>
        <div className='titlecard' >
        Crafting a community of expertise
        </div>
        <div className='titlecard' >
        Empowering professionals, enriching lives
        </div>
      </div>
<div>

  </div>
  <div className='mainimg'>
  <div className='imgcard'>
<div className='f2'>
  <div className='f3'>
  From needs to 
deeds, we've got 
the professionals
for every task
  </div>
<div style={{marginLeft:"20%"}}>
<Button variant='outlined'   style={{ color: 'white', backgroundColor: 'black',width:"190px " }}>Learn More</Button>
</div>
</div>
</div>

  </div>
      </div>

    </div>
  )
}

export default Homepage