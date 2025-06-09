import { Box, Card } from "@mui/material";
import Lista from '../Componentes/Lista'
import Titulo from '../Componentes/Titulo'

export default function PagePost() {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignContent: 'center', alignItems: 'center' }}>



                <Titulo texto={"Lista dos Posts"}></Titulo>
                <Lista></Lista>


            </Box>
        </div>
    );
}