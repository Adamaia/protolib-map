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
  
export default function CardPokemon(props) {


const {states, setters, requests} = useContext(GlobalStateContext)
const history = useHistory();
const [fotoPokemon, setFotoPokemon] = useState([])
const { name, pokemon } = props;

const pegaInformacoesPokemon = async () => {
    try {
        const response = await axios.get(`${UrlBase}/${name}`)
        setFotoPokemon(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
    } catch (erro) {
        console.log("Erro", erro);
    }
}

const pegarPokedex = (poke) => {
    const index = states.pokemonsApi.findIndex((i) => i.name === poke.name);
    console.log("index",index);
    if (index !== -1) {
        let novoPokemon = [...states.pokedex,poke];
        setters.setPokedex(novoPokemon);
        alert(`${poke.name} foi adicionado ao sua pokedex!`);
    }else{
        alert(`${poke.name} ja adicionado!`);
    }
}

useEffect(() => {
    pegaInformacoesPokemon();
}, [])

return (
    <CardPoke>
            <Nome>{name}</Nome>
            <Img src={fotoPokemon} />
        <Buttons>
            <Pegar onClick={() =>pegarPokedex(pokemon)}>Pegar</Pegar>
            <Detalhes onClick={() => goToDetalhesPage(history,name)}>Detalhes</Detalhes>
        </Buttons>
    </CardPoke>
)
}
