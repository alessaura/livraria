import React, { useState } from 'react'; 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddAutor = () => {
  const [autor, setAutor] = useState({
    nome: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAutor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/autor", autor);
      navigate("/autores");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando Autor</h2>
      <div className='row'>
        <div className='col-md-12'>
          <h3>Autor</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Nome:</label>
              <input 
                type="text" 
                className="form-control" 
                name="nome" 
                placeholder="Digite o Nome do Autor" 
                onChange={handleChange} 
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Cadastrar
            </button>
            <br />
            <Link to="/autores">Listar Autores</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAutor;
