import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './Paginas/Post'




export function ExportaRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Post />} />

                <Route path="*" element={<h2 color='black'>404 Página não encontrada</h2>} />
            </Routes>
        </Router>
    )
}
