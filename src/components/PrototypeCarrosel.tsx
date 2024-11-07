import React, { useState } from 'react';
import preferencia from '../assets/preferencia.png';
import tela_nuvens from '../assets/tela_nuvens.png';
import telaPrincipal from '../assets/tela_principal.png'; // Imagem do telefone
import telaViagem from '../assets/tela_viagem.png';
import '../styles/PrototypeCarousel.css';

interface Slide {
  image: string; // URL da imagem PNG
  description: string; // Descrição da tela
}

const slides: Slide[] = [
  { image: telaPrincipal, description: 'Tela inicial do aplicativo' },
  { image: telaViagem, description: 'Página de perfil do usuário' },
  { image: preferencia, description: 'Tela de Preferencias' },
  { image: tela_nuvens, description: 'Obrigado!' },
  { image: telaViagem, description: 'Tela de configurações' },
];

const PrototypeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Lado esquerdo com a imagem */}
        <div className="carousel-left">
          <div className="carousel-slide">
            <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
          </div>
        </div>

        {/* Lado direito com a descrição e o botão */}
        <div className="carousel-right">
          <div className="carousel-description">
            <p>{slides[currentIndex].description}</p>
          </div>
          <div className="carousel-navigation">
            {/* Botões de navegação com setas */}
            <button className="carousel-button prev" onClick={prevSlide}>
              &lt; {/* Setinha para a esquerda */}
            </button>
            <button className="carousel-button next" onClick={nextSlide}>
              &gt; {/* Setinha para a direita */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeCarousel;
