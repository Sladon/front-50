import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username: username,
                password: password,
            });

            console.log(response.data);  // Mensaje del backend
            // Aquí puedes redirigir al usuario o realizar otras acciones después del inicio de sesión exitoso
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            // Puedes mostrar un mensaje de error al usuario
        }
    };

    return (
        <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
