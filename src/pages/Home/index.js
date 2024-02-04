import React from 'react';

import GlobalState from '../../context/GlobalState'




import AreaLivros from '../../components/CardEstante';
import Buscar from '../../components/Buscar';


export const home = () => {


  const { states, setters, requests } = useContext(GlobalState)

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

