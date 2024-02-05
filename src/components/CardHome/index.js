import React from 'react';

// bibliotecas instaladas (fora do react)
import axios from 'axios';

// MUI, STYLED, CSS, COMPONENTES VISUAIS, CSS 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

//CONTEXTUAIS  - ESTADOS, ALTERA ESTADOS, FUNCOES DE OUTROS LUGARES
import GlobalState from '../../context/GlobalState'
import {useContext, useEffect, useState} from 'react'

//ROTAS , historico ETC
import {goToDetalhes} from "../routes/coordinator"
import { useHistory } from "react-router";

//PAGINAS E COMPONENTES COM FUNCOES E LOGICAS.. E Constantes
import {  baseUriApi } from '../../constant/uriApi'
import { pesquisaUriApi, pesquisadoDoInputApi, paramsApi } from '../../constant/uriApi'
import { volumeIdApi, keyApi  } from '../../constant/uriApi'












export default function CardLivro() {
  
export default function CardLivroHome(props) {


const {states, setters, requests} = useContext(GlobalStateContext)
const history = useHistory();
const [capaLivro, setCapaLivro] = useState([])
const { id, livro } = props;


//FUNÇÃO QUE PEGA IMAGEN, IREMOS USA-LA?????????

// const pegaInformacoesPokemon = async () => {
//     try {
//         const response = await axios.get(`${UrlBase}/${id}`)
//         setCapaLivro(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
//     } catch (erro) {
//         console.log("Erro", erro);
//     }
}
                    //poke
const pegarlivro = (livro) => {
        //acessa a api books, procura pelo titulo e verifica se o livro encontrado é igual ao livro que está na api
        const index = states.booksApi.findIndex((i) => i.id === livro.id);
        console.log("index", index);

        //remove o livro da lista de livros
        if (index !== -1) { 
            //ussa a mesma lógica de reitar para criar um array novo que será renderizado na pagina de minhaEstante que terá o livro de index 0
            let novaEstante = [...states.estante,livro];
            setters.setEstante(novaEstante);
            alert(`${livro.id} foi adicionado ao sua Estante!`);
        }else{
            alert(`${livro.id} ja adicionado!`);
        }
    }

    useEffect(() => {
        pegarlivro();
    }, [])

    return (
        <div 
        style={divStyle} 
        nomedaDiv="Card Home"
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
                              onClick={() => pegarlivro(livro)}
                          >
                                Adicionar a Minha Estante
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

          <Nome>{id}</Nome>
          <Img src={fotoPokemon} />
          <Buttons>
              <Pegar 
                onClick={() => pegarlivro(livro)}
              >
                deletar
              </Pegar>
              <Detalhes 
                onClick={() => goToDetalhesPage(history,id)}
              >
                Detalhes
              </Detalhes>
          </Buttons>
    </Card>



        </div> 
 
    )
}




