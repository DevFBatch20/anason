//appjs es el body con el que voy a dividir la aplicación, generalmente es header, body y footer
//Dependencias
import React, { Component } from 'react';
import Carousel from '../Carousel'
import Card from '../Card'

class Home extends Component {
  render() { 
    console.log("Renderizando esta funcion")
    return (
        <div>
        <Carousel />
        <Card />
        </div>
    );
  }
}

export default Home;