import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddLivro = () => {
  const [livro, setLivro] = useState({
    fk_editora: "",
    fk_categoria: "",
    fk_autor: "",
    titulo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/livro", livro);
      navigate("/livros");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando Livro</h2>
      <div className='row'>
        <div className='col-md-12'>
          <h3>Livro</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Título:</label>
              <input 
                type="text" 
                className="form-control" 
                name="titulo" 
                placeholder="Digite o Título do Livro" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">ID da Editora:</label>
              <input 
                type="text" 
                className="form-control" 
                name="fk_editora" 
                placeholder="Digite o ID da Editora" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">ID da Categoria:</label>
              <input 
                type="text" 
                className="form-control" 
                name="fk_categoria" 
                placeholder="Digite o ID da Categoria" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">ID do Autor:</label>
              <input 
                type="text" 
                className="form-control" 
                name="fk_autor" 
                placeholder="Digite o ID do Autor" 
                onChange={handleChange} 
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Cadastrar
            </button>
            <br />
            <Link to="/livros">Listar Livros</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddLivro;
