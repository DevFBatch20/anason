// Dependencia
import React, {Component} from 'react';
import Celular from "../images/celular2.jpeg";
import Samsung from "../images/samsung.jpeg";
import Cellg from "../images/cellg.jpeg";
import Nokia from "../images/nokia.png";
import Huawei from "../images/huawei.jpeg";
import { Button } from 'reactstrap';

class Producto extends Component{
    render() {
        return(
 <div className="producto">
                {/* <!-- Page Content --> */}
    <div class="container">

      {/* <!-- Page Heading/Breadcrumbs --> */}
      <h1 class="mt-4 mb-3">Motorola XT1725 Moto C Plus 16GB color Negro. 
        <small> Desbloqueado Nacional</small>
      </h1>

      {/* <!-- Portfolio Item Row --> */}
      <div class="row">

        <div class="col-md-7">
          <img class="img-fluid" src={Celular} width={500} height={300} mode='fit' alt="buuu"/>
        </div>

        <div class="col-md-5">
          <h3>Moto C Plus</h3>
          <p>Moto C Plus es accesible y cuenta con las características fundamentales que buscas; por ejemplo, 
              una batería que dura hasta 1 día con una sola carga, un procesador quad-core, Android 7.0 y velocidad 4G2. Además, 
              tiene un diseño estilizado con una 
              pantalla HD vibrante de 5", y una cámara frontal y trasera para selfies y fotos óptimas, incluso con poca luz. Moto C Plus.</p>
          <ul style={{textAlign: 'left'}}>
            <li>Súper batería de 4000 mAh.con carga rápida</li>
            <li>Selfies increíbles con flash frontal</li>
            <li>Pantalla vibrante HD de 5"</li>
            <li>Android 7.0</li>
            <li>Quad-core 1.3 GHz Cortex-A53</li>
          </ul>
            <div>
                <Button  color="primary">Comprar</Button>{''}
            </div>

        </div>

      </div>
      {/* <!-- /.row --> */}

      {/* <!-- Related Projects Row --> */}
      <h3 class="my-4">Todas las marcas</h3>

      <div class="row">

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src={Samsung} alt=""/>
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src={Cellg} alt=""/>
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src={Nokia} alt=""/>
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src={Huawei} alt=""/>
          </a>
        </div>

          


      </div>
      {/* <!-- /.row --> */}

    </div>
    {/* <!-- /.container --> */}
 </div>
        );
    }
}

export default Producto;