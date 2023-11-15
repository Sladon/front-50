import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username: username,
                password: password,
            });

            console.log(response.data);  
        
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            
        }
    };

    const handleRegister = () => {
        navigate('/register');
      };

    return (
        <div>
            <div className='logo-sesion'>
                <img className='icono-sesion' src='/img/hamburguer.png' alt='Search' />
                <h1 className='qcomparator-sesion'>QComparator</h1>
            </div>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                <h1> No tienes cuenta? registrate</h1>
                <button onClick={handleRegister}>Registrarse</button>
            </div>
        </div>
    );
};

export default Login;
