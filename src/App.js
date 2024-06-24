import React from 'react';
import Login from './component/Auth/Login'; // Ajusta la ruta según la estructura de tu proyecto

import './App.css'; // Archivo para estilos CSS

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>InstaTweet</h1>
      </header>
      <main className="app-content">
        <Login />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 InstaTweet</p>
      </footer>
    </div>
  );
};

export default App;
