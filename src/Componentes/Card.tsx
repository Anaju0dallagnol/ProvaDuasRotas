import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface CardProps {

    titulo:String
    textoMeio:String;
    postID:any;

  }
  
  export default function ComponentButton({titulo,textoMeio,postID}: CardProps) {
    return (
      <div>
        

        <Card sx={{ maxWidth: 345 }}>

        <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>

        <CardMedia
          sx={{ height: 140 }}
          image="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/hello-kitt-perfil.jpg"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {textoMeio}
          </Typography>
        </CardContent>
        <CardActions>
        <Typography variant="subtitle2">Post ID: {postID}</Typography>
        </CardActions>
      </Card>
      </div>

    );
  }