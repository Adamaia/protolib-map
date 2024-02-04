import React from 'react';
import axios from 'axios';
import { useContext, useEffect, useState } from "react"
import GlobalState from '../../context/GlobalState';

export const Detalhes = () => {

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