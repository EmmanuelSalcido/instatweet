import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { auth } from '../../firebaseConfig'; // Importar auth desde firebaseConfig

import './Login.css'; // Archivo para estilos CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      // Aquí puedes acceder a userCredential.user para obtener el usuario autenticado
      console.log('Usuario autenticado:', userCredential.user);
      // Aquí podrías redirigir a otra página o mostrar un mensaje de bienvenida
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // Aquí puedes acceder a userCredential.user para obtener el nuevo usuario creado
      console.log('Nuevo usuario creado:', userCredential.user);
      // Aquí podrías redirigir a otra página o mostrar un mensaje de bienvenida
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="login-container"
    >
      <h2>Login / Register</h2>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
