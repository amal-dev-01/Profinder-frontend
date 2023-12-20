import React, { useRef, useState } from 'react';
import axios from 'axios';  // Import axios

const Register = () => {
  const inputRef = useRef();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    is_professional:'false',
    phone :'',
    username:'',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
//   console.log(formData);

  const handleSubmit = async (e) => {  
    console.log(formData);
    e.preventDefault()

    try {
      const response = await axios.post('http://127.0.0.1:8000/register/',JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('rer',response);
      if (response.status === 201) {
        alert('Registration successful. You can now log in');
      } else {
        alert('Registration failed. Please check your details and try again.');
      }
    } 
        catch (error) {
            console.error('Error during registration:', error);
          
            if (error.response) {
              console.log('Response data:', error.response.data);
            } else if (error.request) {
              console.log('No response received:', error.request);
            } else {
              console.log('Error setting up the request:', error.message);
            }
          
            alert('Registration failed. Please check your details and try again.');
          
      }
    }


  return (
    <div>
      <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <label>Email</label><br />
            <input type='email' name='email' onChange={handleChange} required /><br />
            <label>username</label><br />
            <input type='text' name='username' onChange={handleChange} required /><br />
            <label>phone</label><br />
            <input type='text' name='phone' onChange={handleChange} required /><br />
            <label>Password</label><br />
            <input type='password' name='password' onChange={handleChange} required /><br />
            <label>Confirm Password</label><br />
            <input type='password' name='password2' onChange={handleChange} required /><br /><br /><br />
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Register;
