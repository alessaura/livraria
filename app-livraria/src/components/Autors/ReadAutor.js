import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const ReadAutors = () => { 
    const { id } = useParams(); 
    const [autor, setAutor] = useState({}); 

    useEffect(() => { 
        axios.get(`http://localhost:8081/autor/${id}`) 
        .then(res => { 
            console.log(res); 
            setAutor(res.data); 
        }) 
        .catch(err => console.log(err)); 
    }, [id]); 

    return ( 
        <div className="container"> 
            <div className='row'> 
                <div className='col-md-12'> 
                    <h1>Detalhes do Autor</h1> 
                    <table className="table"> 
                        <thead> 
                            <tr> 
                                <th>ID</th> 
                                <th>Nome</th> 
                                <th>Data Cadastro</th> 
                                <th>Data Alteração</th> 
                            </tr> 
                        </thead> 
                        <tbody> 
                            <tr> 
                                <td>{autor.id}</td> 
                                <td>{autor.nome}</td> 
                                <td>{autor.createdAt}</td> 
                                <td>{autor.updatedAt}</td> 
                            </tr> 
                        </tbody> 
                    </table> 
                </div> 
            </div> 
        </div> 
    ); 
} 

export default ReadAutors; 
