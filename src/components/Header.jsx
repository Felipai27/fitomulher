// src/components/Header.jsx
import React from 'react';
import './Header.css';
import logo from '../assets/fitoterapia.jpg';

export default function Header() {
  return (
    <header>
      {/* -- Navegação -- */}
      <nav className="nav-bar">
        <div className="nav-logo">
          
        </div>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#avaliacao" className="active">Avaliação</a></li>
          <li><a href="#recursos">Recursos</a></li>
          <li><a href="#duvidas">Dúvidas</a></li>
        </ul>
      </nav>

      {/* -- Hero -- */}
      <div className="hero">
        <img src={logo} alt="Florzinha" className="hero-icon"  />

        
        <h1 className="hero-title">FITO-MULHER</h1>
        <p className="hero-subtitle">Com mais qualidade de vida</p>
      </div>
    </header>
  );
}
