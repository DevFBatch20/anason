//appjs es el body con el que voy a dividir la aplicación, generalmente es header, body y footer
//Dependencias
import React, { Component } from 'react';

class Page404 extends Component {
  render() {
    console.log("Renderizando esta funcion")
    return (
        <div>
          Soy el Page404
        </div>
    );
  }
}

export default Page404;