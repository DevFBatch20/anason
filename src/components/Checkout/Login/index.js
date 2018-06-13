import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="panel panel-primary">
                    <div class="panel-body">

                        <form method="POST" action="#" role="form">

                            <div class="form-group">
                                <h2>Login</h2>
                            </div>

                            <div class="form-group">
                                <strong>Email o celular</strong>
                                <input id="signinEmail" type="email" maxlength="50" class="form-control"/>
                            </div>

                            <div class="form-group">
                                <strong>Contraseña</strong>
                                <span class="right"><a href="#">Olvidé mi contraseña</a></span>
                                <input id="signinPassword" type="password" maxlength="25" class="form-control"/>
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