import React, { useState } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const initialValues = {
  email: '',
  password: '',
  password2: '',
  isProfessional: false,
  phone: '',
  username: '',
};

export default function LoginPage() {
  const [formData, setFormData] = useState(initialValues);
  const [registrationResult, setRegistrationResult] = useState({
    status: null,
    message: '',
  });

  const navigate = useNavigate();

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

      setRegistrationResult({
        status: response.status,
        message: 'Successful send otp!',
      });

      setTimeout(() => {
        navigate(`/otp/${formData.email}`);
      }, 1000);
    } catch (error) {
      handleRegistrationError(error);
    }
  };

  const handleRegistrationError = (error) => {
    if (error.response && error.response.status === 400) {
      const errorData = error.response.data;

      if (errorData.email && errorData.email.length > 0) {
        setRegistrationResult({
          status: 'error',
          message: 'This email is already registered. Please try a different email.',
        });
      } else if (errorData.username && errorData.username.length > 0) {
        setRegistrationResult({
          status: 'error',
          message: 'This username is already taken. Please choose a different username.',
        });
      } else if (errorData.passwords && errorData.passwords.length > 0) {
        setRegistrationResult({
          status: 'error',
          message: 'The passwords you entered do not match. Please try again.',
        });
      } else {
        setRegistrationResult({
          status: 'error',
          message: 'Registration failed. Please check your details and try again.',
        });
      }
    } else {
      setRegistrationResult({
        status: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <Box>
          <Typography>AppLogo</Typography>
        </Box>
        <Box>
          <Button >Login in</Button>
        </Box>
      </Box>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?w=740&t=st=1703404336~exp=1703404936~hmac=35b4820f021ab4071238e02cd1d819a3ee47060b0a467ec09907dd4130c6531d"
            alt="Reset Password"
            style={{ width: '100%', padding: '5%', paddingTop: '15%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '10%',
            }}
          >
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form style={{ width: '70%' }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="password"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password2"
                label="Confirm Password"
                name="password2"
                type="password"
                autoComplete="password2"
                autoFocus
                onChange={handleChange}
              />
              <Button type="submit" variant="outlined" fullWidth sx={{ mt: 3, mb: 2 }}>
               Get otp  
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
