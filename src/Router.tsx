import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './Paginas/Post'
import Dados from './Paginas/Dados'
import PaginaInicial from './Paginas/PaginaInicial'


export function ExportaRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/Dados" element={<Dados />} />
                <Route path="/Dados/:id" element={<Dados />} />
                <Route path="/Post" element={<Post />} />
                <Route path="*" element={<h2 color='black'>404 Página não encontrada</h2>} />
            </Routes>
        </Router>
    )
}
