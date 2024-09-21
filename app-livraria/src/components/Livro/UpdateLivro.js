import axios from "axios"; 
import React, { useState, useEffect } from "react"; 
import { Link, useNavigate, useParams } from "react-router-dom"; 

function UpdateLivro() { 
    const { id } = useParams(); 
    const [livro, setLivro] = useState({ 
        titulo: "", 
        fk_editora: "", 
        fk_categoria: "", 
        fk_autor: "", 
        createdAt: "", 
        updatedAt: "" 
    }); 

    const navigate = useNavigate(); 

    const handleChange = (e) => { 
        setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value })); 
    }; 

    useEffect(() => { 
        axios.get(`http://localhost:8081/livro/${id}`) 
        .then(res => { 
            console.log(res); 
            setLivro(res.data); 
        }) 
        .catch(err => console.log(err)); 
    }, [id]); 

    const handleClick = async (e) => { 
        e.preventDefault(); 

        try { 
            await axios.put(`http://localhost:8081/livro/${id}`, livro); 
            navigate("/livros"); 
        } catch (err) { 
            console.log(err); 
        } 
    }; 

    return ( 
        <div className="container"> 
            <h1>Formulário para Editar o Livro</h1> 
            <form> 
                <div className="mb-3 mt-3"> 
                    <label className="form-label">ID:</label> 
                    <input type="text" className="form-control" id="id" 
                           name="id" value={livro.id} disabled 
                           onChange={handleChange} /> 
                </div> 
                <div className="mb-3 mt-3"> 
                    <label className="form-label">Título:</label> 
                    <input type="text" className="form-control" 
                           id="titulo" placeholder="Título do Livro"  
                           name="titulo" value={livro.titulo} 
                           onChange={handleChange} /> 
                </div> 
                <div className="mb-3 mt-3"> 
                    <label className="form-label">ID da Editora:</label> 
                    <input type="text" className="form-control" 
                           id="fk_editora" placeholder="ID da Editora"  
                           name="fk_editora" value={livro.fk_editora} 
                           onChange={handleChange} /> 
                </div> 
                <div className="mb-3 mt-3"> 
                    <label className="form-label">ID da Categoria:</label> 
                    <input type="text" className="form-control" 
                           id="fk_categoria" placeholder="ID da Categoria"  
                           name="fk_categoria" value={livro.fk_categoria} 
                           onChange={handleChange} /> 
                </div> 
                <div className="mb-3 mt-3"> 
                    <label className="form-label">ID do Autor:</label> 
                    <input type="text" className="form-control" 
                           id="fk_autor" placeholder="ID do Autor"  
                           name="fk_autor" value={livro.fk_autor} 
                           onChange={handleChange} /> 
                </div> 
                <div className="mb-3 mt-3"> 
                    <label className="form-label">Data de Criação:</label> 
                    <input type="text" className="form-control" 
                           id="createdAt" placeholder="Data da Criação"  
                           name="createdAt" value={livro.createdAt} 
                           onChange={handleChange} /> 
                </div> 
                <div className="mb-3 mt-3"> 
                    <label className="form-label">Data de Alteração:</label> 
                    <input type="text" className="form-control" 
                           id="updatedAt" placeholder="Data de Alteração"  
                           name="updatedAt" value={livro.updatedAt} 
                           onChange={handleChange} /> 
                </div> 
                <button type="submit" className="btn btn-primary" 
                        onClick={handleClick}>Alterar</button> 
            </form> 
            <div className='container d-flex justify-content-center'> 
                <Link to="/livros">Veja todos os livros</Link> 
            </div> 
        </div> 
    ); 
} 

export default UpdateLivro; 
