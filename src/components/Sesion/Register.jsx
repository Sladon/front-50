import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
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

    return (
        <div>
            <div className='login-back'>
                <div className="go-back-login" onClick={() => navigate("/login")}>
                    &#60;
                </div>
                <div className="login-name">
                    Iniciar Sesion
                </div>
            </div>
            <div className='logo-sesion'>
                <img className='icono-sesion' src='/img/hamburguer.png' alt='Search' />
                <h1 className='qcomparator-sesion'>QComparator</h1>
            </div>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default Register;
