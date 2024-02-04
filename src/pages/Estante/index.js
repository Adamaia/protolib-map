import React {useEffect, useState, useContext} from 'react';

// ESTILOS, DESIGN SYSTEM, MUI, VISUAIS 
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

//CONTEXTUAIS 
import GlobalState from '../../context/GlobalState'

//PAGINAS E COMPONENTES VISUAIS..
import { baseUriApi, volumePesquisadoDoInputApi, paramsKeyApi} from '../../constant/baseUriApi'

//ROTAS ETC
import {goToDetalhes} from "../routes/coordinator"
import { useHistory } from "react-router";


export const Estante = () => {

    const divStyle = {
        color: 'gray',
        maxWidth: '100%',
        // backgroundColor: 'red',
        padding: '30px',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      };
  


      
//  AQUI COMECA A FUNCAO DA ESTANTE DE VERDADE - ESTANTE 

    const history = useHistory();
    const {states, setters, requests} = useContext(GlobalState)


    const listaLivrosNaTela = states.estante && states.estante.length > 0 && states.estante.map((pokemon)=>{
        return (

            <Card style={{margin: '8px'}} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="260"
                image={volume.volumeInfo.imageLinks.thumbnail}
                // image={volume.thumbnail}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {volume.volumeInfo.title}
                  {/* {volume.title} */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {volume.volumeInfo.authors}
                {/* {volume.authors} */}
                authors
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

<CardPokedex 
                    key={pokemon.name}
                    name={pokemon.name}
                    pokemon={pokemon}
                />

        ) 
    })




    return ( 

        <div 
            style={divStyle}
        >

    <Box
      component="form"
      sx={{
          '& > :not(style)': { m: 1, width: '70ch' },
        }}
        noValidate
        autoComplete="off"
        >

   




      <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
            


            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Pesquisar Livro"
                inputProps={{ 'aria-label': 'search google maps' }}
                fullWidth="true"
                />


                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                <SearchIcon />
            </IconButton>

        </Paper>


    </Box>


   


        </div>

    )
}