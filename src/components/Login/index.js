import React, { Component } from 'react';
import { Input, UncontrolledAlert } from 'reactstrap';

// Componentes
import Alert from '../Alert'

import api from '../../api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      flag: 0
    };
  }
  
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  miFuncion = (dataFromChild) => {
    this.setState({ flag: dataFromChild });
  }

  login = (event) => {
    event.preventDefault();

    api.post('/login', this.state)
      .then(response=> {
        this.setState({ 
          color: 'success',
          flag: 1,
          message: 'Ey estas dentro :3',
        })
        localStorage.setItem("token", response.data.token);
      })
      .catch( error => { 
        error.response.status === 500 ?  this.setState({ color: 'danger'}) : this.setState({ color: 'warning'})
        this.setState({ 
          flag: 1,
          message: error.response.data.message,
        })
      });
  }

  render() {
    return (
        <div class="container">
            { this.state.flag != 0 ?  
              <Alert color={this.state.color} message={this.state.message} funcionDelPadre={this.miFuncion}/> : null }
            <div class="row">
                <div class="panel panel-primary">
                    <div class="panel-body">

                        <form onSubmit={this.login}>
                            
                            <div class="form-group">
                                <h2>Login</h2>
                            </div>

                            <div class="form-group">
                                <strong>Email o celular</strong>
                                <Input className="form-control" type="text" name="email" id="email" placeholder="Escribe tu nombre completo porfa" value={this.state.name} onChange={this.handleChange} required />
                            </div>

                            <div class="form-group">
                                <strong>Contraseña</strong>
                                <span class="right"><a href="#">Olvidé mi contraseña</a></span>
                                <Input className="form-control" type="password" name="password" id="password" placeholder="Escribe una contraseña" value={this.state.password} onChange={this.handleChange} required minLength="6" />
                            </div>

                            <div class="form-group">
                                <button id="signinSubmit" type="submit" class="btn btn-success btn-block">Sign in</button>
                            </div>

                            <div class="form-group divider">
                                <hr class="left"/><small>¿Nuevo en la tiendita?</small><hr class="right"/>
                            </div>

                            <div class="form-group">
                                <a href='/Registro' type="button" class="btn btn-info btn-block">Crea tu cuenta</a>
                            </div>

                            <p class="form-group">Al hacer sign in estás aceptando nuestros: <a href="#">Terminos de uso</a> y nuestra <a href="#">Políticas de privacidad</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;