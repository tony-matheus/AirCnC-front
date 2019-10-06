import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg'

import './styles.css'
import { navigate } from '@reach/router';

export default function New() {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() =>{
      return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('price', price);
    data.append('techs', techs);

    await API.post('/spot', data, { headers: { user_id }});

    navigate('dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{backgroundImage: `url(${preview})`}}
        className={thumbnail ? "has-thumbnail" : ''}
        >
        <input
          type="file"
          onChange={event => { setThumbnail(event.target.files) }} />
        <img src={camera} />
      </label>
      <label htmlFor="company">Empresa * </label>
      <input
        id="company"
        placeholder="Sua empresa"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />


      <label htmlFor="techs">Tecnologias * <span>(separadas por virgulas) </span></label>
      <input
        id="techs"
        placeholder="Sua empresa"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />


      <label htmlFor="price">Valor Da Diária * <span>(em branco caso gratuito)</span></label>
      <input
        id="price"
        placeholder="Sua empresa"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />
    </form>
  )
}