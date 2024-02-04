import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import Estante from '../pages/Estante'
import Descubra from '../pages/Descubra'
import Detalhes from '../pages/Detalhes'

export const Router = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/detalhes/:nomelivro">
                    <Detalhes />
                </Route>

                <Route exact path="/minhaestante">
                    <Estante />
                </Route>

                <Route exact path="/descubra">
                    <Descubra />
                </Route>

            </Switch>
        
        </BrowserRouter>
    )
}