import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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


  login = (event) => {
    event.preventDefault();
    
    axios.post('https://amazonb20.herokuapp.com/api/v1/login', this.state)
      .then(function (response) {
        console.log(response)
        localStorage.setItem("token", response.data.token);

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
        <div class="container">
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