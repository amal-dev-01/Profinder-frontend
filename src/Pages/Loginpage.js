import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Container } from "@mui/material";
const Loginpage = () => {

    const {login,errorMessage} =useContext(AuthContext)
  return (
    <Container component="main" maxWidth='xl'  sx={{ height: '100vh', display: 'flex', alignItems: 'center',justifyContent:'center',alignContent:'center'}}>
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
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
               {errorMessage && (
                <Stack spacing={2} sx={{ width: '100%' }}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Stack>
              )}
            
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={login}
                sx={{ mt: 1 }}
              >
                
                <TextField id="email" label="Email" variant="standard" fullWidth  autoComplete="email" name='email' />
                <TextField id="password" label="Password" variant="standard" fullWidth  autoComplete="current-password" name='password' />
          

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
        
                <Grid >
                  <Grid>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid> 
               
                  <Grid >
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    
      
      
//   <Box sx={{  display: 'flex',
//   alignItems: "center",
//   justifyContent: "space-between",
//   width:"50%",
// }}>
//     <Box sx={{ width:'50%'}}>
//       <img
//       src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       width={250} />

      
//     </Box>
//     <Box sx={{ width: '50%', backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(136,136,200,1) 9%, rgba(166,166,236,1) 10%, rgba(0,212,255,1) 100%)", padding: '25px', marginTop: '5px' }}>
//       <h4>Login page</h4>
//       <form onSubmit={login}>
//         <label>Email</label><br />
//         <input type='email' name='email' /><br />
//         <label>Password</label><br />
//         <input type='password' name='password' /><br /><br />
//         <input type='submit' />
//       </form>
//     </Box>
//   </Box>


      
  )
}

export default Loginpage