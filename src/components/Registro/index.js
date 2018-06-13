import React, { Component } from 'react';

class Registro extends Component {
  render() {
    return (
        
    <div class="container">
		<div class="row">
			<div class="panel panel-primary">
				<div class="panel-body">
					<form method="POST" action="#" role="form">
						
            <div class="form-group">
							<h2>Crear una cuenta</h2>
						</div>
						<div class="form-group">
							<label class="control-label" for="signupNombre">Nombre*</label>
							<input id="signupNombre" type="text" maxlength="50" class="form-control"/>
						</div>
						<div class="form-group">
							<label class="control-label" for="signupEmail">Email*</label>
							<input id="signupEmail" type="email" maxlength="50" class="form-control"/>
						</div>
						<div class="form-group">
							<label class="control-label" for="signupTelefono">Telefono</label>
							<input id="signupTelefono" type="telefono" maxlength="50" class="form-control"/>
						</div>
						<div class="form-group">
							<label class="control-label" for="signupContra">Contraseña*</label>
							<input id="signupContra" type="contra" maxlength="25" class="form-control" placeholder="al menos 6 caracteres" length="40"/>
						</div>
						<div class="form-group">
							<button id="signupSubmit" type="submit" class="btn btn-info btn-block">Crea tu cuenta</button>
						</div>
						<p class="form-group">Al crear tu cuenta estás aceptando nuestros: <a href="#">Términos de uso</a> y nuestro <a href="#">Aviso de privacidad</a>.</p>
						
						<p></p>¿Ya tienes una cuenta?<a href="#"> Sign in</a>
                       
					</form>
				</div>
			</div>
		</div>
	</div>

    );
  }
}

export default Registro;