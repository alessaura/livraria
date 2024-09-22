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
import ListAutors from './components/Autors/ListAutors';
import AddAutors from './components/Autors/AddAutor';
import ReadAutors from './components/Autors/ReadAutor';
import UpdateAutors from './components/Autors/UpdateAutor';
// Importação de Categorias
import ListCategoria from './components/Categoria/ListCategoria'; 
import AddCategoria from './components/Categoria/AddCategoria'; 
import ReadCategoria from './components/Categoria/ReadCategoria'; 
import UpdateCategoria from './components/Categoria/UpdateCategoria'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            {/* Rotas para Editoras */}
            <Route path="/editora" element={<ListEditoras />} />
            <Route path="/addEditora" element={<AddEditora />} />
            <Route path="/readEditora/:id" element={<ReadEditora />} />
            <Route path="/updateEditora/:id" element={<UpdateEditora />} />
            {/* Rotas para Livros */}
            <Route path="/livros" element={<ListLivros />} />
            <Route path="/addLivro" element={<AddLivro />} />
            <Route path="/readLivro/:id" element={<ReadLivro />} />
            <Route path="/updateLivro/:id" element={<UpdateLivro />} />
            {/* Rotas para Autors */}
            <Route path="/autors" element={<ListAutors />} />
            <Route path="/addAutors" element={<AddAutors />} />
            <Route path="/readAutors/:id" element={<ReadAutors />} />
            <Route path="/updateAutors/:id" element={<UpdateAutors />} />
            {/* Rotas para Categorias */}
            <Route path="/categorias" element={<ListCategoria />} />
            <Route path="/addCategoria" element={<AddCategoria />} />
            <Route path="/readCategoria/:id" element={<ReadCategoria />} />
            <Route path="/updateCategoria/:id" element={<UpdateCategoria />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
