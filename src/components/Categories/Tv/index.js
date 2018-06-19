import React, { Component } from 'react';
 
class Categorias extends Component {

    render() {
        return (   
            <tr>                 
                <td class="col-sm-8 col-md-6">
                <div class="media">
                    <a class="thumbnail pull-left" href="#"> <img class="media-object" src="https://s7d2.scene7.com/is/image/SamsungUS/UN65NU8500FXZA_001_Front_Black-1600x1200?$product-details-jpg$"/> 
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading"><a href="#">Samsung NU8000 </a></h4>
                        <h5 class="media-heading"> by <a href="#">TV</a></h5>
                        <span>Estatus: </span><span class="text-success"><strong>Disponible en Inventario</strong></span>
                    </div>  
                </div>
                </td>
                <td class="col-sm-1 col-md-1" >
                <input type="email" class="form-control" id="exampleInputEmail1" value="3"/>
                </td>
                <td class="col-sm-1 col-md-1 text-center"><strong>$35,000</strong></td>
                <td class="col-sm-1 col-md-1 text-center"><strong></strong></td>
                <td class="col-sm-1 col-md-1">
                <button type="button" class="btn btn-danger">
                    <span class="glyphicon glyphicon-remove"></span> 
                </button>
                </td>
            </tr>
        );
      }
    }

export default Categorias;

