import Titulo from '../Componentes/Titulo'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '../Componentes/Button'

export default function PagePrimeiraPagina() {
    const navigate = useNavigate();

    return (
        <div>
             <Box sx={{
                display: 'flex', flexDirection: 'column', gap: 3, alignContent: 'center', alignItems: 'center', height: '100vh', justifyContent: 'center',
                width: '100%'
            }}>
                <Titulo texto='Aplicação em TypeScript' ></Titulo>
                <Titulo texto='com duas rotas' ></Titulo>

                
                <Button onClick={() => navigate('/post')} texto={'INICIAR'} />
            </Box>

     </div>
    )

}