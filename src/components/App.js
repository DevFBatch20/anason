//appjs es el body con el que voy a dividir la aplicación, generalmente es header, body y footer
//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Component
import Header from './Global/Header'
import Footer from './Global/Footer'
import Body from './Global/Body'

//Assets
import './Global/css/App.css';

import items from '../data/menu' //aqui importo mi json

class App extends Component {
 
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const {children} = this.props;

    return (
      
      <div className="App">
        <Header title="Sumadora" items={items}/>  {/*Asi se llama un componente*/}
        <Body content={children} />
        <Footer hola="Yo soy un footer"/>
      </div>
    );
  }
}

export default App;
