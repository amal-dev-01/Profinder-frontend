import './Profile.css';
import { Button } from '@mui/material';
import axios from 'axios';
import AuthContext from '../Context/AuthContext';

import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  
  const sendRequest = (e) => {
    const id = e.target.id;
    navigate(`/follow/${id}`);
  }
  

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/userlist/", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(token.access),
        }
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(response.data);
        setUsers(data);
      } else if (response.status === 401) {
        setError('Unauthorized');
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);



  
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
                    {/* <Button onClick={fetchUsers}>Add Post</Button>   */}

                    {users.length > 0 && (
  <div>
    {users.map(user => (
      <div key={user.id}>
        <p>{user.username}</p>
        <Button id={user.id} onClick={sendRequest}>Follow</Button> 
      </div>
    ))}
  </div>
)}


                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
