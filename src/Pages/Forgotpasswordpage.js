import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import './Forgotpassword.css'

const defaultTheme = createTheme();

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
  <Box sx={{display:'flex',justifyContent:'space-between',padding:"10px"}}>
    <Box>
      <Typography>AppLOgo</Typography>

    </Box><Box>
      <Button>Login</Button>
    </Box>
  </Box>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src='https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1703399363~exp=1703399963~hmac=3f980e88a150d028c75a1b034979489b6b2d09065c0a95cde45ad1fb37ac96d6'
            alt="Reset Password"
            style={{ width: "100%", padding: "5%",paddingTop:"15%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '20%',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '70%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                className='button'
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
              Forgot Password
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
