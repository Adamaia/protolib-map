import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useLivros, useLivrosDespacho } from '../../context/LivrosContext';
// Forma certa de puxar o cotexto. 




export default function CardLivro() {
  
  const livros = useLivros()
  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* {livros.titulo} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {livros.autor}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          > Adicionar na Estante ?
        </Button>
        <Button size="small" color="primary">
          + Detalhes
        </Button>

      </CardActions>
    </Card>
  );
}
