import '../styles/hero.css';

const Solutions = () => {
  return (
    <section id="home">
    <section className="solutions container py-lg">
      <h2>Sob medida para você</h2>
      <p>
        Inovação é com a gente! A nossa empresa já conquistou diversos clientes, veja você mais um deles.
      </p>
      <div className="even-columns gap-1">
        <div className="card">
          <h3>Planejamento Personalizado</h3>
          <p>Descubra destinos incríveis com um planejamento feito sob medida para você. O app se adapta ao seu estilo de viagem!</p>
        </div>
        <div className="card">
          <h3>Dentro do Seu Orçamento</h3>
          <p>Viaje tranquilo! Nós encontramos as melhores opções que cabem no seu bolso, sem surpresas no caminho.</p>
        </div>
        <div className="card">
          <h3>Tudo em Um Só Lugar</h3>
          <p> Hospedagem, passeios, transporte. Organize sua viagem completa em minutos e aproveite ao máximo sua aventura!</p>
        </div>
      </div>
    </section>
    </section>  
  );
};

export default Solutions;
