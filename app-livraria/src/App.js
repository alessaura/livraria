import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ListEditoras from './components/Editora/ListEditora'; 
import AddEditora from './components/Editora/AddEditora'; 
import ReadEditora from './components/Editora/ReadEditora'; 
import UpdateEditora from './components/Editora/UpdateEditora'; 
import ListLivros from './components/Livro/ListLivros'; 
import AddLivro from './components/Livro/AddLivro'; 
import ReadLivro from './components/Livro/ReadLivro'; 
import UpdateLivro from './components/Livro/UpdateLivro'; 
import ListAutors from './components/Autor/ListAutors'; // Nova importação
import AddAutor from './components/Autor/AddAutor'; // Nova importação
import ReadAutor from './components/Autor/ReadAutor'; // Nova importação
import UpdateAutor from './components/Autor/UpdateAutor'; // Nova importação

function App() { 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <BrowserRouter> 
          <Routes> 
            <Route path="/editora" element={<ListEditoras/>} /> 
            <Route path="/addEditora" element={<AddEditora/>} /> 
            <Route path="/readEditora/:id" element={<ReadEditora/>} /> 
            <Route path="/updateEditora/:id" element={<UpdateEditora/>} /> 
            {/* Rotas para Livros */}
            <Route path="/livros" element={<ListLivros/>} /> 
            <Route path="/addLivro" element={<AddLivro/>} /> 
            <Route path="/readLivro/:id" element={<ReadLivro/>} /> 
            <Route path="/updateLivro/:id" element={<UpdateLivro/>} /> 
            {/* Rotas para Autors */}
            <Route path="/autors" element={<ListAutors/>} /> 
            <Route path="/addAutor" element={<AddAutor/>} /> 
            <Route path="/readAutor/:id" element={<ReadAutor/>} /> 
            <Route path="/updateAutor/:id" element={<UpdateAutor/>} /> 
          </Routes> 
        </BrowserRouter> 
      </header> 
    </div> 
  ); 
} 

export default App; 
