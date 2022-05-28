import { Link } from "react-router-dom";
import imageLost from '../../assets/Lost-amico.svg';
import './styles.css';

const Error = () => {
  return (
    <div className="not-found">
      <div className="text">
        <h1>404</h1>
        <h2>Página não encontrada!!</h2>
        <h3>Está Perdido? </h3>
        <Link to='/' >Voltar a Home</Link>
      </div>
      <img src={imageLost} alt='Imagem Perdida' />
    </div>    
  )
}

export default Error;