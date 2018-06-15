//
import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Assets
//import logo from '.img/logo.png'

class Header extends Component {
    static propTypes = {
        title: Proptypes.string.isRequired,
        items: Proptypes.array.isRequired,

        menu: Proptypes.string.isRequired,
        textos: Proptypes.array.isRequired
    }
    render(){
      const {title,items}=this.props
      const {menu,textos}=this.props
  
      return (
      
         <div>
  
         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">            
           <div className="container">
             <a className="navbar-brand" href="/">La Tiendita..</a>
             <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul className="navbar-nav ml-auto">
                 <form className="form-inline my-2 my-lg-0">
                   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
  
  
               {/*}  {textos && textos.map((texto, key) => {
                   return <li className="nav-item" key={key}>
                     <Link className="nav-link" to={texto.url}> {texto.menu} </Link>
                   </li>}
                  )}*/}

                {items && items.map((item, key) => {
                 return <li className="nav-item" key={key}>
                   <Link className="nav-link" to={item.url}> {item.texto} </Link>
                 </li>}
                )}

              
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Departamentos
                    </DropdownToggle>
                    <DropdownMenu right>
                      {items && items.map((item, key) => {
                        return <DropdownItem className="nav-item" key={key}>
                                <Link to={item.url}> {item.title} </Link>
                              </DropdownItem>}
                      )}
                    </DropdownMenu>
                 </UncontrolledDropdown>

               </ul>
             </div>
           </div>
         </nav>
         <nav className="navbar navbar-light bg-light">
           <a className="navbar-brand" href="">
             <img src="../img/navbargrafico.jpg" className="d-inline-block align-top" alt=""/>
           </a>
         </nav>
     </div> 
  
  
          
      );
    }
  }
  

export default Header;


/*
//este es un componente nuevo que acabo de crear, la regla es que mi archivo se llame igual que mi clase y que a mi clase le de exportar

//Dependencias
import React, { Component } from 'react';
import Proptypes from 'prop-types'; //Libreria para mandar propiedades entre pares e hijos
import {Link} from 'react-router-dom';

//Assets
import logo from './img/logo.svg';

class Header extends Component {
  static propTypes = {
    title: Proptypes.string.isRequired,//libreria.tipodeObjeto.EsRequeridoOÑo
    items: Proptypes.array.isRequired
  }
  render() {
    // props son las propiedades que me esta pasando el path
    const {title, items} = this.props 

    return (
      <div>  
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="img/navbargrafico.jpg" class="d-inline-block align-top" alt=""/>
          </a>
        </nav>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">            
          <div class="container">
            <a class="navbar-brand" href="index.html">Anason</a>
            <img src="img/anason.jpg" width="30" height="30" class="d-inline-block align-top" alt="" />
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                  {items && items.map((item, key) => {
                  return <li class="nav-item" key={key}>
                    <Link class="nav-link" to={item.url}> {item.title} </Link>
                  </li>}
                  )}
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Departamentos
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                    <a class="dropdown-item" href="portafolio-categorias-col.html">Electrónicos</a>
                    <a class="dropdown-item" href="portfolio-2-col.html">Celulares</a>
                    <a class="dropdown-item" href="portfolio-3-col.html">TV y DVD's</a>
                    <a class="dropdown-item" href="portfolio-4-col.html">Computación</a>
                    <a class="dropdown-item" href="portfolio-item.html">Videojuegos</a>
                    <a class="dropdown-item" href="portfolio-item.html">Hogar</a>
                    <a class="dropdown-item" href="portfolio-item.html">Moda</a>
                    <a class="dropdown-item" href="portfolio-item.html">Belleza</a>
                    <a class="dropdown-item" href="portfolio-item.html">Salud</a>
                    <a class="dropdown-item" href="portfolio-item.html">Juguetes</a>
                    <a class="dropdown-item" href="portfolio-item.html">Bebes</a>
                    <a class="dropdown-item" href="portfolio-item.html">Deportes</a>
                    <a class="dropdown-item" href="portfolio-item.html">Electrodomésticos</a>
                  </div>
                </li>
                <li>
                <img src="img/anason.jpg" width="30" height="30" class="d-inline-block align-right" alt=""/>

                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                    <a class="dropdown-item" href="full-width.html">Full Width Page</a>
                    <a class="dropdown-item" href="sidebar.html">Sidebar Page</a>
                    <a class="dropdown-item" href="faq.html">FAQ</a>
                    <a class="dropdown-item" href="404.html">404</a>
                    <a class="dropdown-item" href="pricing.html">Pricing Table</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> 
    );
  }
}

export default Header;
*/