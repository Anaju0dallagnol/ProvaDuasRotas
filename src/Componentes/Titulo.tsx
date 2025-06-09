import { Typography } from "@mui/material";

interface TituloProps {

  texto: string;

}

export default function ComponentTitulo ({ texto }: TituloProps) {
  return (
    <div>
        <Typography variant="h3" color="white">{texto}</Typography>
   </div>

  );
}

