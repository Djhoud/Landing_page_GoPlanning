import React, { useState } from 'react';
import '../styles/signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar o e-mail para o backend ou serviço de inscrição
    alert(`Você se inscreveu com o e-mail: ${email}`);
  };

  return (
    
      <div className="signup"> 
        <h2>Inscreva-se para mais novidades</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Inscrever-se</button>
        </form>
      </div>
    );
    
};

export default Signup;
