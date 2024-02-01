import React from 'react';
import { Icon } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import CardLivro from '../CardLivro';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


import { useState } from 'react' 
import { useLivros, useLivrosDespacho } from '../../context/LivrosContext';
// Forma certa de puxar o cotexto. 

export default function AreaLivros() {
  
  
  const divStyle = {
    color: 'black',
    minWidth: '70%',
    // maxWidth: '100%',
    backgroundColor: 'blue',
    padding: '20px',
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  
  




  const livros = useLivros()

    
    const listarLivrosImported = livros.map((dadoLivro) => {
        return <p>{"  Livro: "+dadoLivro.titulo + " do Autor: "+ dadoLivro.text + "  / "}</p>
    })

    const listarLivrosNoCard = livros.map((dadoLivro) => {
        return (
            <Card style={{margin: '8px'}} >
               <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image={dadoLivro.capa}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dadoLivro.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {dadoLivro.autor}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
           Adicionar na Estante !
        </Button>
        <Button size="small" color="primary">
          + Detalhes
        </Button>

      </CardActions>

            </Card>
        )
    })  


    return ( 

        <div 
            style={divStyle}
        >

{/* {/* { console.log(Object.values(dataLivros[1])+ "console obj") } */}

{/* {console.log((arrayLivros[3].titulo) + " interno array")}
{console.log((arrayLivros[4].titulo) + " interno array")} */}
{/* { console.log((dataLivros[2].titulo) + " console ext") } */}
 




{/* {listarLivrosImported} */}
{listarLivrosNoCard}

{/* {console.log(importLivrosContextok)} */}
{/* {console.log("Abaixo, o externo")}
{listarLivrosCompoExtArr}
{console.log("acima o externo")} */}



        {/* <CardLivro /> */}


        </div>

    )
}