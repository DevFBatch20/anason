// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Components 
import App from './components/App'; //lo primero que hace es buscar un index.js, si no se debe declarar
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
<App> 
    {/* aqui abrí app */}
    <Switch> 
        <Route exact path ="/" component={Home}/> {/*Siempre que sea la ruta integra ira a home*/}
        <Route component={Page404} /> {/*Este sería mi else*/}
    </Switch>
</App>

export default AppRoutes;