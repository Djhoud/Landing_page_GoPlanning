import logo_goplanning from '../assets/logo_goplanning.svg';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo_goplanning} alt="Logo GoPlanning" className="logo"/>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#home">Solutions</a></li>
          <li><a href="#about-app">Sobre o App</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
