import { Button } from "@mui/material";



interface ButtonsProps {
    onClick: () => void;
    texto: string;

  }
  
  export default function ComponentButton({onClick, texto }: ButtonsProps) {
    return (
      
      <Button sx={{background:"#F9C80E",textTransform: "none",color:"black"}} variant="contained" onClick={onClick}>{texto}</Button>
  
    );
  }