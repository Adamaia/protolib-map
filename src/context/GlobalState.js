import React, { useEffect, useState } from "react"
import axios from "axios";
import ContextState from './ContextState';
import { baseUriApis, paramsKeyApi } from '../constants/uriApi';

const GlobalState = (props) =>{

//INPUT
    const [inputControladorState, setInputState] = useState('')
    const [inputPesquisaState, setPesquisaState] = useState('')


//API E LISTA DE LIVROS 
    const [apiRetornoState, setApiRetornoState] = useState({})


    const listaLivrosFromApi = async () => {
        try {
        //   const response = await axios.get(`${baseUriApis} ${pesquisaState} ${paramsKeyApi} ` );
          const response = await axios.get(`${baseUriApis} Seidney Sheldon ${paramsKeyApi} ` );
          setApiRetornoState(response.data)
        } catch (erro) {
          console.log("Erro", erro); 
        }
      }

      


    // const [pokemonsApi, setPokemonsApi] = useState([]) 
    // const [pokedex, setPokedex] = useState([])
    // const [pagina, setPagina] = useState(0)

    // const listaPokemons = async () => {
    //     try {
    //         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=30`);
    //         setPokemonsApi(response.data.results);     
    //     } catch (erro) {
    //         console.log("Erro", erro);
    //     }
    // }




    const states = { apiRetornoState, inputControladorState, inputPesquisaState };
    const setters = { setInputState, setPesquisaState  };
    const requests = { listaLivrosFromApi };
    // const funcoes = { botao1, botao2, botao3,botao4 }


    return(
        
    <ContextState.Provider value={{ states, setters, requests }}>
        {props.children}
    </ContextState.Provider>
    
    )


}

export default GlobalState