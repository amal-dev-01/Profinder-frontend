import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const Loginpage = () => {

    const {login} =useContext(AuthContext)
  return (
    <div style={{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
    
    
        <div>
        <h4>Login page</h4>
        <form onSubmit={login}>
        <label>Email</label><br/>
        <input type='email' name='email'/><br/>
        <label>password</label><br/>
        <input type='password' name='password'/><br/><br/>
        <input type='submit'/>

        </form>
        </div>
       
    </div>
  )
}

export default Loginpage