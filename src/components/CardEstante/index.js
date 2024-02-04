import React from 'react';
import axios from 'axios';

import {useEffect, useState, useContext} from 'react'

// MATERIAL, COMPONENTES VISUAIS, CSS, STYLED, 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



//CONTEXTUAIS 
import GlobalState from '../../context/GlobalState'


//ROTAS ETC
import {goToDetalhes} from "../routes/coordinator"
import { useHistory } from "react-router";

//PAGINAS E COMPONENTES VISUAIS E FUNCOES-LOGICAS..
import {  baseUriApi } from '../../constant/uriApi'
import { pesquisaUriApi, pesquisadoDoInputApi, paramsApi } from '../../constant/uriApi'
import { volumeIdApi, keyApi  } from '../../constant/uriApi'






// ANTIGO AREA LIVROS - AREA Q RENDERIZA OS CARDS DE POKE/LIVRO ... CONTEM, CARDLIVRO
// REF. - CARDPOKEDEX.JS
export default function CardEstante(props) {
  
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



  const {states, setters, requests} = useContext(GlobalState)
  const history = useHistory();


  // const [capaLivro, setCapaLivro] = useState([])
  const { titulo, autor, capa, id, livro } = props;

  
  // PEGA CAPA LIVRO 
  // const pegaInformacoesLivro = async () => {
  //     try {
  //         const response = await axios.get(`${baseUriApi}${volumeIdApi}${keyApi}`)
  //         setCapaLivro(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
  //     } catch (erro) {
  //         console.log("Erro", erro);
  //     }
  // }


  // REFERENCIA ORIGINAL 
  // const deletarPokemon = (removerPokemon) => {
  //   const position = states.pokedex.findIndex((pokemon) => {
  //     return pokemon.name === removerPokemon.name;

  const deletarLivro = (removerLivro) => {
      const position = states.estante.findIndex((livro) => {
        return livro.id === removerLivro.id;
      });
      let novaEstante = [...states.estante];
      if (novaEstante[position] !== 1) {
          novaEstante.splice(position, 1);
      }
      setters.setEstante(novaEstante);
      alert(`${removerLivro.id} foi deletado com sucesso!`);
    };

  // useEffect(() => {
  //     pegaInformacoesPokemon();
  // }, [])

  return (

    <div 
      style={divStyle} 
      nomedaDiv="Card Estante"
    >
<Card style={{margin: '8px'}} >
<CardActionArea>
                        <CardMedia
                              component="img"
                              height="260"
                                    image={volume.volumeInfo.imageLinks.thumbnail}
                        />
                        <CardContent>
                              <Typography gutterBottom variant="h5" component="div" >
                                    title: {volume.volumeInfo.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                    authors: {volume.volumeInfo.authors} 
                              </Typography>
                        </CardContent>
                  </CardActionArea>
                  <CardActions>
                          <Button 
                              size="small" 
                              color="primary"
                              onClick={() => deletarLivro(livro)}
                          >
                                Excluir
                          </Button>
                          <Button 
                              size="small" 
                              color="primary"
                              NESTE LUGAR ESTA O QUE DEFINE QUAL SERA MOSTRADO EM DETALHES
                              onClick={() => goToDetalhes(history, id)}
                          >
                                + Detalhes
                          </Button>

                  </CardActions>

          <Nome>{name}</Nome>
          <Img src={fotoPokemon} />
          <Buttons>
              <Pegar 
                onClick={() => deletarLivro(livro)}
              >
                deletar
              </Pegar>
              <Detalhes 
                onClick={() => goToDetalhesPage(history,name)}
              >
                Detalhes
              </Detalhes>
          </Buttons>
</Card>
    </div>
  )
  
  
}







///ref
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
