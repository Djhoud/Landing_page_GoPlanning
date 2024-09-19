import exemplo_01 from '../assets/exemplo_01.svg';
import exemplo_02 from '../assets/exemplo_02.svg';
import '../styles/aboutApp.css';
import '../styles/navbar.css';
import Navbar from './Navbar';

function AboutApp() {
  return (
    <div> 
      <Navbar />
      <main>
        <section id="home">
        </section>
        <section id="about-app" className="about-app">
          <h2>Explore o GoPlanning</h2>
          <div className="about-app-content">
            <div className="about-app-text">
              <h3>Planejamento Inteligente</h3>
              <p>O GoPlanning ajusta suas viagens de acordo com suas preferências e orçamento, tornando o planejamento mais fácil e eficiente.</p>
            </div>
            <div className="about-app-image">
            <img src={exemplo_01} alt="Logo GoPlanning"/>
            </div>
          </div>

          <div className="about-app-content">
            <div className="about-app-image">
            <img src={exemplo_02} alt="Logo GoPlanning"/>
            </div>
            <div className="about-app-text">
              <h3>Economia e Simplicidade</h3>
              <p>Economize tempo e dinheiro com nosso sistema integrado de poupança e planejamento automático de viagens.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutApp;
