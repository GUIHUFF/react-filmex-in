import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { Link } from "react-router-dom";

import './styles.css';
import Loading from "../../Components/Loading";
// URL DA API: /movie/now_playing?api_key=ab689815313a6cb4fd9a5df7af38599f&language=pt-BR

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
      async function loadFilmes() {
        const response = await api.get('movie/now_playing', {
          params: {
            api_key: `${process.env.REACT_APP_API_KEY}`,
            language: 'pt-BR',
            page: 1,
          }
        });
        setFilmes(response.data.results.slice(0,10));
        setLoading(false);
      }

      loadFilmes();
    }catch (err){
      console.log(err);
    }

  },[]);

  if ( loading ) {
    return(
      <div className="loading">
        <Loading />
      </div>
    );
  }

  return (
    <div className='container'>
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title}/>
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  )
}

export default Home;