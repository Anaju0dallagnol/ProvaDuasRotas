import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Card from '../Componentes/Card'
import Alert from '../Componentes/Alert'

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
            <div>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', gap: 3, alignContent: 'center', alignItems: 'center', height: '100vh', justifyContent: 'center',
                    width: '100%'
                }}>
                    <Alert texto={"Carregando..."}></Alert>
                </Box>
            </div>
        );

    }

    return (
        <div>
            <Box sx={{
                display: 'flex', flexDirection: 'column', gap: 3, alignContent: 'center', alignItems: 'center', height: '100vh', justifyContent: 'center',
                width: '100%'
            }}>

                <Card titulo={post.title} textoMeio={post.body} postID={post.userId}></Card>
            </Box>
        </div>
    );
}
