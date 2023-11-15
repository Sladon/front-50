import React, { useState } from 'react';
import { RegisterUser } from '../../api';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleResponse = (resp) => {
        console.log(resp)
    }

    const handleRegister = () => {
        RegisterUser({ username: username, email: email, password: password }, handleResponse)
    };

    return (
        <>
            <div className='login-back'>
                <div className="go-back-login" onClick={() => navigate("/login")}>
                    &#60;
                </div>
                <div className="login-name">
                    Volver a inicio de sesion
                </div>
            </div>
            <div className='logo-sesion'>
                <img className='icono-sesion' src='/img/hamburguer.png' alt='Search' />
                <h1 className='qcomparator-sesion'>QComparator</h1>
            </div>
            <div className='user-input'>
                <label>Nombre de usuario:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Mail:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Contraseña:</label>
                <div className='password-container'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="toggle-password" onClick={togglePasswordVisibility}>
                        {showPassword ? '👁️' : '🙈'}
                    </span>
                </div>

                <button onClick={handleRegister}>Registrar cuenta!</button>
            </div>
        </>
    );
};

export default Register;
