import React, { useState } from 'react';
import { LoginUser } from '../../api';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { useGlobalContext } from '../../context';

const Login = () => {
    const navigate = useNavigate();
    const [username1, setUsername1] = useState('');
    const [password, setPassword] = useState('');
    const { setIslogged, setUsername, setUsermail, setUserid, setUserrol } = useGlobalContext();

    const handleResponse = (response) => {
        if (response.user.id !== null) {
            setIslogged(true);
            setUsername(response.user.username);
            setUsermail(response.user.email);
            setUserid(response.user.id);
            setUserrol(response.user.rol);
            navigate('/profile'); 
        } else {
            alert('Inicio de sesión fallido. Verifica tu nombre de usuario y contraseña.');
        }
    }

    const handleLogin = () => {
        LoginUser({ username: username1, password: password }, handleResponse);
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
                <label>Nombre de Usuario:</label>
                <input type="text" value={username1} onChange={(e) => setUsername1(e.target.value)} />

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
