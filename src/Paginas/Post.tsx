import { Box, Card } from "@mui/material";
import Lista from '../Componentes/Lista'


export default function PagePost() {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignContent: 'center', alignItems: 'center' }}>




                    <Lista></Lista>


            </Box>
        </div>
    );
}