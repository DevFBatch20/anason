import React, { Component } from 'react';
import Producto from './Producto'
import Calculo from './Calculo'
import Botones from './Botones'

class checkout extends Component {
  render() {
    console.log("Renderizando esta funcion")
    return (
      <div className="checkout"> 
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-10 col-md-offset-1">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th class="text-center">Precio</th>
                                <th class="text-center">Total</th>
                                <th> </th>
                            </tr>
                        </thead> 
                        <tbody>
                            <Producto />
                            <Producto />
                            <Producto />
                            <Calculo />
                            <Botones />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default checkout;