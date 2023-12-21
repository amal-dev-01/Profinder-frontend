
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import { AuthProvider } from './Context/AuthContext';
import Register from './Pages/Register';
import Header from './Pages/Header';
import Otppage from './Components/Verification/Otppage';



function App() {
  return (
    <div className="App">
       <Router>
        <AuthProvider>
        <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/otp/:email' element={<Otppage/>}/>

        </Routes>
        </AuthProvider>
      </Router>
    
    </div>
  );
}

export default App;
