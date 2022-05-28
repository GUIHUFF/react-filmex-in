import React, { useEffect, useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Lixeira from '../../assets/delete-icon.svg';

const Favoritos = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('@filmex-in');
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  const handleDelete = (id) => {
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id )
    });

    setFilmes(filtroFilmes);
    localStorage.setItem('@filmex-in', JSON.stringify(filtroFilmes));
    toast.success('O filme foi removido!')
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>
      {filmes.length === 0 && <span>Você não possui nem um filme salvo!! :C</span>}
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <div>
                <Link to={`/filme/${filme.id}`} ><img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title}/></Link>
                <span>{filme.title}</span>
              </div>
              <div>
                <Link className="ver-mais" to={`/filme/${filme.id}`} >Ver detalhes</Link>
                <button onClick={() => handleDelete(filme.id)}><img src={Lixeira} alt='deletar' /></button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;