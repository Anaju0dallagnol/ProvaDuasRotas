import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface ButtonsProps {

    titulo:String
    textoMeio:String;
    postID:any;
    postUserID: any;

  }
  
  export default function ComponentButton({titulo,textoMeio,postID,postUserID }: ButtonsProps) {
    return (
      <div>
        

        <Card sx={{ maxWidth: 345 }}>

        <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>

        <CardMedia
          sx={{ height: 140 }}
          image="https://img.freepik.com/photos-gratuite/vue-du-cameleon-couleurs-neons-vives_23-2151682767.jpg?semt=ais_hybrid&w=740"

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
        <Typography variant="subtitle2">User ID: {postUserID}</Typography>
        </CardActions>
      </Card>
      </div>

    );
  }