import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReadCategoria = () => {
    const { id } = useParams();
    const [categoria, setCategoria] = useState({});

    useEffect(() => {
        const fetchCategoria = async () => {
            try {
                const res = await axios.get(`http://localhost:8081/categoria/${id}`);
                console.log(res);
                setCategoria(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCategoria();
    }, [id]);

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes da Categoria</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descrição</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{categoria.id}</td>
                                <td>{categoria.descricao}</td>
                                <td>{categoria.createdAt}</td>
                                <td>{categoria.updatedAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ReadCategoria;
