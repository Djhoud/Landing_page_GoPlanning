import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    alert('Estamos trabalhando nisso');
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#" onClick={handleClick}>Sobre Nós</a>
        <a href="#" onClick={handleClick}>Faça Parte do Time</a>
        <a href="/contato" onClick={handleClick}>Contato</a>
        <a href="#" onClick={handleClick}>Política de Privacidade</a>
        <a href="#" onClick={handleClick}>Termos de Serviço</a>
      </div>
      <p className="footer-copy">© 2024 GoPlanning. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
