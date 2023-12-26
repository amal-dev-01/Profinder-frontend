import { createContext, useState } from "react";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const nav = useNavigate()

    const [token, setToken] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
    const [user, setUser] = useState(localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null);
    const [errorMessage, setErrorMessage] = useState('');


    const login = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/token/', {
                email: e.target.email.value,
                password: e.target.password.value,
            });

            if (response.status === 200) {
                const data = response.data;
                setToken(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('token', JSON.stringify(data))
                console.log(data);
                if (user) {
                    nav('/')
                }

            }

        } catch (error) {
            console.error('Error during login:', error);
            if (error.response) {
                const statusCode = error.response.status;
                if (statusCode === 400) {
                  setErrorMessage('Invalid email or password. Please try again.');
                } else if (statusCode === 401) {
                  setErrorMessage('Authentication failed. Please check your credentials.');
                } else {
                  setErrorMessage('An unexpected error occurred. Please try again.');
                }
              } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
              }
            
        }
    };


    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        nav('/login');
    };


    const updateToken = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/token/refresh/', {
                refresh: token?.refresh
            });

            const data = response.data;
            if (response.status === 200) {
                setToken(data);
                setUser(jwtDecode(data.access));
                localStorage.setItem('token', JSON.stringify(data));
            } else {
                console.error('Token refresh failed:', response);
                logout();
            }
        } catch (error) {
            console.error('Error during token refresh:', error);
            logout();
        }
    };

    

    const contextData = {
        login: login,
        logout: logout,
        token : token,
        user:user,
        errorMessage:errorMessage
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

