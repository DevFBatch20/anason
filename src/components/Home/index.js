//appjs es el body con el que voy a dividir la aplicación, generalmente es header, body y footer
//Dependencias
import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log("Renderizando esta funcion")
    return (
        <div className="Home">
          <h1>Soy el home</h1>
        </div>
    );
  }
}

export default Home;