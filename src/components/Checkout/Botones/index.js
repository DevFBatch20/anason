import React, { Component } from 'react';

class Botones extends Component {
  render() {
    
    return (
        <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
            <td>
            <button type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-shopping-cart"></span> <a href="/">Continuar Comprando</a>
            </button></td>
            <td>
            <a href='../ConfirmacionPedido' type="button" class="btn btn-success" >
                Checkout <span class="glyphicon glyphicon-play"></span>
            </a></td>
        </tr>
    );
  }
}

export default Botones;