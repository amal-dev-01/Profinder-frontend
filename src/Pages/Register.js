import React, { useState } from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    is_professional: 'false',
    phone: '',
    username: '',
  });

  
  const nav = useNavigate()


  const [registrationResult, setRegistrationResult] = useState({
    status: null,
    message: '',
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Response:', response);
  
      setRegistrationResult({
        status: response.status,
        message: 'Successful send otp !',
      });
  
      setTimeout(() => {
        nav(`/otp/${formData.email}`);
      }, 1000);
    } 
    catch (error) {
      console.error('Error during registration:', error);
    
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
    
        if (errorData.email && errorData.email.length > 0) {
          setRegistrationResult({
            status: 'error',
            message: 'This email is already registered. Please try a different email.'
          });
        } else if (errorData.username && errorData.username.length > 0) {
          setRegistrationResult({
            status: 'error',
            message: 'This username is already taken. Please choose a different username.'
          });
        } else if (errorData.passwords && errorData.passwords.length > 0) {
          setRegistrationResult({
            status: 'error',
            message: 'The passwords you entered do not match. Please try again.'
          });
        } else {
          // Handle other error types or display a generic message
          setRegistrationResult({
            status: 'error',
            message: 'Registration failed. Please check your details and try again.'
          });
        }
      } else {
        // Handle generic error
        setRegistrationResult({
          status: 'error',
          message: 'An unexpected error occurred. Please try again.'
        });
      }
    }

  }
  return (
    <Container component="main" maxWidth="md" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
      <Box>
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={8}
            md={6}
            sx={{
              backgroundImage: "url(https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              {registrationResult.status === 201 && (
                <Stack spacing={2} sx={{ width: '100%' }}>
                  <Alert severity="success">{registrationResult.message}</Alert>
                </Stack>
              )}
  
              {registrationResult.status === 'error' && (
                <Stack spacing={2} sx={{ width: '100%' }}>
                  <Alert severity="error">{registrationResult.message}</Alert>
                </Stack>
              )}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField id="email" label="Email" variant="standard" fullWidth autoComplete="email" onChange={handleChange} name='email' />
                <TextField id="username" label="Username" variant="standard" fullWidth onChange={handleChange} name='username' />
                <TextField id="phone" label="Phone" variant="standard" fullWidth onChange={handleChange} name='phone' />
                <TextField id="password" label="Password" variant="standard" fullWidth autoComplete="current-password" onChange={handleChange} name='password' />
                <TextField id="password2" label="Confirm password" variant="standard" fullWidth autoComplete="current-password" onChange={handleChange} name='password2' />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Get Otp
                </Button>

                <Grid >

                  <Grid >
                    <Link href="#" variant="body2">
                      {"Already have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>


    </Container>)
};


export default Register;
