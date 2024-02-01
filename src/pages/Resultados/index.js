import React, { useEffect } from 'react';
import { Icon } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AreaBusca from '../../components/AreaLivros';
import AreaLivros from '../../components/AreaLivros';
import Buscar from '../../components/Buscar';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


import { useState } from 'react' 
import { useLivros, useLivrosDespacho } from '../../context/LivrosContext';
// Forma certa de puxar o cotexto. 

import axios from 'axios'


export default function Resultados() {

    const divStyle = {
        color: 'white',
        backgroundColor: 'grey',
        maxWidth: '100%',
        // backgroundColor: 'red',
        // padding: '30px',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px'
      };
  


      const livros = useLivros()

//  *********  PARTE DA API **********

const [responseState, setResponseState] = useState({})
const [itemsState, setItemsState] = useState([])
const [pesquisaState, setPesquisaState] = ([])

const [inputState, setInputState] = useState('')
const [digitadoState, setDigitadoState] = useState('')
const [inputEnterState, setInputEnterState] = useState('')



// Acesso API... 
  const baseApi = "https://www.googleapis.com/books/v1";
  const colecaoApi = "/volumes?q="
  const pathVolumesApi = inputState
  const paramsVolumeApi = "&projection=lite&maxResult=40"
  const keyApi = "&key=AIzaSyA-suusdQ6Zg-CofyfgNBGdg7PJybk3f_A"
  const compostoAPi = `${baseApi}${colecaoApi}${pathVolumesApi}${paramsVolumeApi}${keyApi}`

  // ${baseApi} -> Texto dinamico dentro de um string format . No ${} vem a variavel -> ${ variavel }
  // const apiTemp = "https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyA-suusdQ6Zg-CofyfgNBGdg7PJybk3f_A&projection=lite&#maxResult=40"


      // if(pathVolumesApi > 0 )



      /// ZIFIR RESOLVENDO OS CARDS X MAPS X USEEFFECT 
  useEffect(() => {

    if(inputState !== '') {

      axios.get(compostoAPi).then((response) => {

          setResponseState(response.data)
      });
      
    }

  },[inputState])
 


  //impedir este de ir sozinho... 
  useEffect(() => {
    if( itemsState !== responseState.items ) {

      setItemsState(responseState.items)
    }

  },[itemsState])


// pro map ficar bom...
  // useEffect(() => {

  //   if(digitadoState !== '' && itemsState > 0 ) {

  //     pesquisaState(itemsState)
  //   }

  // },[ digitadoState, itemsState])




  // sem-regras -vazio- Quando ta montANDO: -> Nao tem Colchetes -> Logo Inicio mesmo montando.
  // 1x [] - Quando ta montADO, e roda 1x só -> colchetes vazio -> Ja temos o balcao pronto (app montado, renderizou td)
  // 99x [responseData] Quando é pra atualizar Muitas VEZES -> colchete com as constantes que sofrem mudança...


  if (!responseState) return null;


// ******* FIM logica da API ***********
      
      //   const listarLivrosImported = livros.map((dadoLivro) => {
        //     return <p>{"  Livro: "+dadoLivro.titulo + " do Autor: "+ dadoLivro.text + "  / "}</p>
        // })



        // let listarLivrosOpts = ''
   
        const inicialLivros = [
          { id: 0, title: 'Assim Falou Zaratustra', authors: 'Nietzsche', thumbnail: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/mp_876063f00aab1a83dff09370e03736ec.jpg' },
          { id: 1, title: 'O lado feio do amor', authors: 'Collen Hoover', thumbnail: 'https://d38h3sy5jr28pf.cloudfront.net/capas-livros/9788501112514-colleen-hoover-priscila-catao-e-assim-que-acaba-2709596205.jpg' },
        ]
    
      // if( digitadoState === ''  ) {
      //   listarLivrosOpts = inicialLivros
      // } else {
      //   listarLivrosOpts = itemsState
      // }


        const listarLivrosNoCard = itemsState === responseState.items && itemsState.map((volume) => {

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
          )
      })
  


    



    
    const handleChange = (event) => {
      
      setInputState(event.target.value);
      // event.preventDefault();
      // setBuscarState(event.target.values)
      
      // pathVolumesApi = buscarState

      //////// Aqui posso colocar IF perguntando se houve cliq ou enter, e ai sim, liberar abaixo...
      // setDigitadoState(inputState)
      
    };
    

    // const handleKey = (event) => {
    //   if (event.key === "Enter") {
    //     console.log("tecla enter apertada");
    //     console.log(inputState);
    //     setInputEnterState(event.target.value)
    //   }
    // }


    return ( 


     <div id='pageInicio' style={divStyle}>



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
                          id="inputText"

                          value={inputState} 
                          onChange={handleChange}

                          // defaultValue=''
                          />


                          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                              <SearchIcon />
                          </IconButton>

                  </Paper>


              </Box>






        {listarLivrosNoCard}






        <p>cinza  pagina inicio</p>









        {/* <Data /> */}




               {console.log("abaixo, o endereco da busca completa")}
         {console.log(compostoAPi)}
                {console.log("abaixo, responseState, ou seja, TD")}
        {console.log(responseState)}
                   {console.log("abaixo, itemState, o mesmo q o de cima ponto items")}
        {console.log(itemsState)}
                  {console.log("abaixo, o inputState")}
        {console.log(inputState)}


     </div>
     

    )
}