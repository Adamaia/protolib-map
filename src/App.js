import AddLivro  from "./context/AddLivro";
import LivroList from "./context/LivroList";
import { LivrosProvider } from './context/LivrosContext'

import React, { useContext, useReducer } from "react"
import './App.css';
import ResponsiveAppBar from './components/HeaderMui'

//import Home from './pages/Home'
// import Teste from './pages/Teste'
import Resultados from "./pages/Resultados";


export default function App() {


  const testaContexto = 'testaContexto ok'
  const appStyle = {
    backgroundColor:'yellow',
    color: 'orange',
    innerHeight: '100%',
    minHeight: '100vh',
    padding: '15px'
  }


  return (  
    <LivrosProvider>

    <div className="App" style={appStyle}>
     

      

      
        <p> EM AMARELO, AREA DO APP.JS - OU SEJA INICIO DE TD</p>
        <ResponsiveAppBar />
        <Resultados />
    </div>
  </LivrosProvider>
  )}