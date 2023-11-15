import React, { useState } from 'react';
import { LoginUser } from '../../api';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleResponse = () => {

    }

    const handleLogin = () => {
        LoginUser({ email: email, password: password }, handleResponse)
    }

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
                <label>Mail:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Contraseña:</label>
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
