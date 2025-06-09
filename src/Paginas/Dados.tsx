import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

// Tipo dos dados recebidos da API
interface PostaDados {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PageDados() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostaDados | null>(null);


  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data: PostaDados) => {
          setPost(data);
        })
        .catch((err) => {
          console.error('Erro ao buscar dados:', err);
        });
    }
  }, [id]);


  if (!post) {
    return (
      <Typography variant="h6" color="error" mt={4}>
        Carregando...
      </Typography>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1">
        {post.body}
      </Typography>
      <Typography variant="caption" display="block" mt={2}>
        Usuário: {post.userId}
      </Typography>
    </Box>
  );
}
