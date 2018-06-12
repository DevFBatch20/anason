import React, { Component } from 'react';

class Calculo extends Component {

  render() {
    
    return (
        <tr>
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
        </tr>
    );
  }
}

export default Calculo;