import { useEffect, useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Tipagem da API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function ListaDePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data.slice(0, 100)))
      .catch((err) => console.error('Erro ao buscar posts:', err));
  }, []);

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="lista-posts"
      subheader={
        <ListSubheader component="div" id="lista-posts">
          Lista de Posts
        </ListSubheader>
      }
    >
      {posts.map((post) => (
        <ListItemButton key={post.id} onClick={() => navigate(`/dados/${post.id}`)}>
          <ListItemText primary={post.title} />
        </ListItemButton>
      ))}
    </List>
  );
}
