import React, { Component } from 'react';

class Recibo extends Component {
  render() {
    
    return (
        <div class="container">
            <div class="row">
                <div class="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                            <address>
                                <strong>Juan Paco Pedro de la Mar</strong>
                                <br/>
                                Alvaro Obregón 666
                                <br/>
                                Ciudad de México, CP 06700
                                <br/>
                                <abbr title="Telefono">T:</abbr> (+552) 1-55-34-78-91
                            </address>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 text-right">
                            <p>
                                <em>Fecha: 25 Mayo, 2018</em>
                            </p>
                            <p>
                                <em>Recibo #: 34522677W</em>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="text-center">
                            <h1>Recibo</h1>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>#</th>
                                    <th class="text-center">Precio</th>
                                    <th class="text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="col-md-9"><em>Toallitas femeninas</em><h4/></td>
                                    <td class="col-md-1" > 3 </td>
                                    <td class="col-md-1 text-center">$13</td>
                                    <td class="col-md-1 text-center">$26</td>
                                </tr>
                                <tr>
                                    <td class="col-md-9"><em>Proteína</em><h4/></td>
                                    <td class="col-md-1" > 2 </td>
                                    <td class="col-md-1 text-center">$8</td>
                                    <td class="col-md-1 text-center">$8</td>
                                </tr>
                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td class="text-right">
                                    <p>
                                        <strong>Subtotal:&nbsp;</strong>
                                    </p>
                                    <p>
                                        <strong>Envío:&nbsp;</strong>
                                    </p></td>
                                    <td class="text-center">
                                    <p>
                                        <strong>$6.94</strong>
                                    </p>
                                    <p>
                                        <strong>$6.94</strong>
                                    </p></td>
                                </tr>
                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td class="text-right"><h4><strong>Total:&nbsp;</strong></h4></td>
                                    <td class="text-center text-danger"><h4><strong>$31.53</strong></h4></td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="/"type="button" class="btn btn-success btn-lg btn-block">
                            Continuar Comprando&nbsp;&nbsp;&nbsp;<span/></a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Recibo;