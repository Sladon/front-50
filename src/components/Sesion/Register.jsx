import React, { useState } from 'react';
import { RegisterUser } from '../../api';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [displayError, setDisplayError] = useState([]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleResponse = (resp) => {
        if (resp.message == "Invalid registration data") {
            setDisplayError(resp.errors);
            setConfirmPassword("");
            setEmail("");
            setPassword("");
            setUsername("");
        }
    }

    const handleRegister = () => {
        RegisterUser({ username: username, email: email, password1: password, password2: confirmPassword }, handleResponse)
    };

    const passwordsMatch = password === confirmPassword;
    const emptyPassword = password.length === 0;

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
            <div className='register-input'>
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
                    <label>Confirm Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {passwordsMatch ? null : <p className="error-message">Las contraseñas tienen que ser iguales</p>}
                </div>

                <button onClick={handleRegister} disabled={!passwordsMatch || emptyPassword}>
                    {passwordsMatch && !emptyPassword ? "Registrar cuenta!" : "Complete los campos correctamente"}
                </button>
                {displayError &&
                    Object.keys(displayError).map(errorType => {
                        const errorMessages = displayError[errorType];

                        return errorMessages.map((errorMessage, index) => (
                            <p key={`${errorType}-${index}`} className="error-message">
                                {errorMessage}
                            </p>
                        ));
                    })
                }
            </div>
        </>
    );
};

export default Register;
