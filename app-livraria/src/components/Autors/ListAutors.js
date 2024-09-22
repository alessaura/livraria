import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListAutors = () => {
    const [autors, setAutors] = useState([]);

    // Listar Autors
    useEffect(() => {
        const fetchAllAutors = async () => {
            try {
                const res = await axios.get("http://localhost:8081/autor");
                setAutors(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllAutors();
    }, []);

    console.log(autors);

    // Deletar Autor
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/autor/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando Autores</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addAutor" className="btn btn-success">Adicionar novo Autor</Link></p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {autors.map((autor) => {
                                return (
                                    <tr key={autor.id}>
                                        <td>{autor.id}</td>
                                        <td>{autor.nome}</td>
                                        <td>{autor.createdAt}</td>
                                        <td>{autor.updatedAt}</td>
                                        <td>
                                            <Link to={`/readAutor/${autor.id}`} className="btn btn-success mx-2">Ler</Link>
                                            <Link to={`/updateAutor/${autor.id}`} className="btn btn-info mx-2">Editar</Link>
                                            <button onClick={() => handleDelete(autor.id)} className="btn btn-danger">Deletar</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListAutors;
