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
import AreaBusca from '../../components/AreaLivros';
import AreaLivros from '../../components/AreaLivros';
import Buscar from '../../components/Buscar';


export default function Inicio() {

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
  
    return ( 

     <div id='pageInicio' style={divStyle}>
        <Buscar />
        <AreaLivros />
        <p>cinza  pagina inicio</p>

     </div>
     

    )
}