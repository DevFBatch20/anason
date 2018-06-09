//appjs es el body con el que voy a dividir la aplicación, generalmente es header, body y footer
//Dependencias
import React, { Component } from 'react';
import Proptypes from 'prop-types'; //Libreria para mandar propiedades entre pares e hijos

class Footer extends Component {
  
  static propTypes = {
    hola: Proptypes.string.isRequired  //Lo que me vas a mandar y el tipo
  }
  
  render() {
    
    const {hola = "adios"} = this.props 

    return (
        <div className="Footer">
          <p> {hola}</p>
        </div>
    );
  }
}

export default Footer;