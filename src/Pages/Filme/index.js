import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './styles.css';
import { toast } from "react-toastify";

import Loading from "../../Components/Loading";
import api from "../../Services/api";

const Filme = () => {
  const { id } = useParams();
  const navigate =  useNavigate();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function loadFilme () {
        await api.get(`movie/${id}`, {
          params: {
            api_key: `${process.env.REACT_APP_API_KEY}`,
            language: 'pt-BR',
          }
        })
        .then((response)=>{
          setFilme(response.data);
          setLoading(false);
        }).catch(()=>{
          navigate('/', { replace: true });
          return
        });
      }
      loadFilme();
    } catch(err) {
      console.log(err);
    }
    return () => {
      console.log('');
    }
  }, [id, navigate]);

  const salvarFilme = () => {
    const minhaLista = localStorage.getItem('@filmex-in');
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if (hasFilme) {
      toast.warn('Este filme já está na sua lista!');
      return
    }

    filmesSalvos.push(filme);
    localStorage.setItem('@filmex-in', JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!');

  }

  if ( loading ) {
    return(
      <div className="loading">
        <Loading />
      </div>
    );
  }

  return (
    <div className="filme-info">
      <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title}/>
      <h1>{filme.title}</h1>
      <strong>Avaliação: {filme.vote_average} / 10</strong>
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <h3>Generos:</h3>
      <div className='div-genero'>{filme.genres.map((genero) => {
        return (
          <span className="genero" key={genero.id}>{genero.name}</span>
        )
      })}</div>

      <div className='area-buttons'>
        <button onClick={salvarFilme}>Salvar</button>
        <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} target='blank' rel="external" >Trailer</a>
      </div>
    </div>
  )
}

export default Filme;