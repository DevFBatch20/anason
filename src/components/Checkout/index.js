import React, { Component } from 'react';


class checkout extends Component {
  render() {
    console.log("Renderizando esta funcion")
    return (
      <div>
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
                            <tr>
                                <td class="col-sm-8 col-md-6">
                                <div class="media">
                                    <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"/> 
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading"><a href="#">Toallitas Femeninas</a></h4>
                                        <h5 class="media-heading"> by <a href="#">Saba</a></h5>
                                        <span>Estatus: </span><span class="text-success"><strong>Disponible en Inventario</strong></span>
                                    </div>  
                                </div>
                                </td>
                                <td class="col-sm-1 col-md-1" >
                                <input type="email" class="form-control" id="exampleInputEmail1" value="3"/>
                                </td>
                                <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                                <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                                <td class="col-sm-1 col-md-1">
                                <button type="button" class="btn btn-danger">
                                    <span class="glyphicon glyphicon-remove"></span> Quitar
                                </button>
                                </td>
                            </tr>

                            <tr>
                            <td class="col-md-6">
                            <div class="media">
                                <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"/> </a>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="#">Proteína</a></h4>
                                    <h5 class="media-heading"> by <a href="#">GNC</a></h5>
                                    <span>Status: </span><span class="text-warning"><strong>Deja almacén en 2 - 3 semanas</strong></span>
                                </div>
                            </div></td>
                            <td class="col-md-1">
                                <input type="email" class="form-control" id="exampleInputEmail1" value="2"/>
                            </td>
                            <td class="col-md-1 text-center"><strong>$4.99</strong></td>
                            <td class="col-md-1 text-center"><strong>$9.98</strong></td>
                            <td class="col-md-1">
                            <button type="button" class="btn btn-danger">
                                <span class="glyphicon glyphicon-remove"></span> Quitar
                            </button></td>
                            </tr>

                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td>   </td>
                                <td><h5>Subtotal</h5></td>
                                <td class="text-right"><h5><strong>$24.59</strong></h5></td>
                            </tr>

                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td>   </td>
                                <td><h5>Costo de envío aproximado</h5></td>
                                <td class="text-right"><h5><strong>$6.94</strong></h5></td>
                            </tr>

                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td>   </td>
                                <td><h3>Total</h3></td>
                                <td class="text-right"><h3><strong>$31.53</strong></h3></td>
                            </tr>

                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td>   </td>
                                <td>
                                <button type="button" class="btn btn-default">
                                    <span class="glyphicon glyphicon-shopping-cart"></span> Continuar Comprando
                                </button></td>
                                <td>
                                <a href="checkout.html" type="button" class="btn btn-success" >
                                    Checkout <span class="glyphicon glyphicon-play"></span>
                                </a></td>
                            </tr>

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