import React, { useState } from 'react';

import API from '../../services/api';
import { navigate } from '@reach/router';

export default function Login() {
  const [email, setEmail] = useState('');
  //declarativa V
  // imperative X
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await API.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
    
    navigate("dashboard");
  }

  return (
    <>
      <p>
        Oferecça <strong> spots</strong> para programaddores e encontre <strong> talentos </strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="text"
          placeholder="Seu email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}