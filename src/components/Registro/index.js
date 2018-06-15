import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
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
	
	registro = (event) => {
    event.preventDefault();
    axios.post('https://amazonb20.herokuapp.com/api/v1/users', this.state)
         .then(function (response) {
            console.log(response);
         })
         .catch(function (error) {
            console.log(error);
         });  
  }
		
  render() {
    return (
        
    <div className="container">
		<div className="row">
			<div className="panel panel-primary">
				<div className="panel-body">
					<form onSubmit={this.registro}>
						
            <div className="form-group">
							<h2>Crear una cuenta</h2>
						</div>
						<div className="form-group">
							<label className="control-label">Nombre*</label>
              <Input className="form-control" type="text" name="name" id="name" placeholder="Escribe tu nombre completo porfa" value={this.state.name} onChange={this.handleChange} required />
						</div>
						<div className="form-group">
							<label className="control-label">Email*</label>
              <Input className="form-control" type="email" name="email" id="email" placeholder="Dirección de correo electrónico" value={this.state.email} onChange={this.handleChange} required />
						</div>
						<div className="form-group">
							<label className="control-label">Telefono</label>
							<Input id="signupTelefono" type="phone" className="form-control"/>
						</div>
						<div className="form-group">
							<label className="control-label">Contraseña*</label>
              <Input className="form-control" type="password" name="password" id="password" placeholder="Escribe una contraseña" value={this.state.password} onChange={this.handleChange} required minLength="6" />
						</div>
						<div className="form-group">
							<button id="signupSubmit" type="submit" className="btn btn-info btn-block" onClick= {this.registro}>Crea tu cuenta</button>
						</div>
						<p className="form-group">Al crear tu cuenta estás aceptando nuestros: <a href="#">Términos de uso</a> y nuestro <a href="#">Aviso de privacidad</a>.</p>
						
						<p></p>¿Ya tienes una cuenta?<a href="/login"> Sign in</a>
                       
					</form>
				</div>
			</div>
		</div>
	</div>

    );
  }
}

export default Registro;