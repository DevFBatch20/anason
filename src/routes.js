// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Components 
import App from './components/App'; //lo primero que hace es buscar un index.js, si no se debe declarar
import Home from './components/Home';
import Page404 from './components/Page404';
import checkout from './components/Checkout';
import Login from './components/Login';
import Registro from './components/Registro';
import ConfirmacionPedido from './components/Checkout/ConfirmacionPedido'
import Recibo from './components/Checkout/Recibo'
import Perfil from './components/Perfil'
import Categories from './components/Categories'
import Producto from './components/Producto'


const AppRoutes = () =>
<App> 
    {/* aqui abrí app */}
    <Switch> 
        <Route exact path ="/" component={Home}/> {/*Siempre que sea la ruta integra ira a home*/}
        <Route path="/Checkout" component={checkout}/>
        <Route path="/login" component={Login}/>
        <Route path="/ConfirmacionPedido" component={ConfirmacionPedido}/>
        <Route path="/Recibo" component={Recibo}/>
        <Route path="/Producto" component={Producto}/>
        <Route path="/Registro" component={Registro}/>
        <Route path="/Perfil" component={Perfil}/>
        <Route name="categories" path="/Categories" component={Categories}/>
        <Route component={Page404} /> {/*Este sería mi else*/}
    </Switch>
</App>

export default AppRoutes;