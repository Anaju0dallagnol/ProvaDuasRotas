import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'





export function ExportaRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />


        <Route path="*" element={<h2 color='black'>404 Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}
