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
        <div>
         
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Anason 2018</p>
      </div>
    </footer>
        </div>
    );
  }
}

export default Footer;

