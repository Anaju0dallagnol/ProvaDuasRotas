import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './Paginas/Post'
import Dados from './Paginas/Dados'



export function ExportaRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Post />} />
<Route path="/Dados" element={<Dados />} />
<Route path="/Dados/:id" element={<Dados />} />
                <Route path="*" element={<h2 color='black'>404 Página não encontrada</h2>} />
            </Routes>
        </Router>
    )
}
