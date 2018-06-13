import React, { Component } from 'react';

class producto extends Component {

  render() {
    return (   
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
    );
  }
}

export default producto;