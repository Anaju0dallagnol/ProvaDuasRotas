import { Button } from "@mui/material";



interface ButtonsProps {
    onClick: () => void;
    texto: string;

  }
  
  export default function ComponentButton({onClick, texto }: ButtonsProps) {
    return (
      
      <Button sx={{background:"#C8F3F5",textTransform: "none",color:"black"}} variant="contained" onClick={onClick}>{texto}</Button>
  
    );
  }