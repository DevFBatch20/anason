import React, { Component } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import { CardDeck } from 'reactstrap';
// Components
import Card from '../Card'
 
class Categorias extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
      category: Proptypes.object,
  }

  componentDidMount() {
    axios.get(`https://amazonb20.herokuapp.com/api/v1/category/${this.props.location.state.id}`)
         .then(response => {
          console.log(response)
          this.setState({
            product: response.data[0].image,
            products: response.data
          })
         })
         .catch(error => {
          console.log(error)
         })
  }

  componentDidUpdate(prevProps, prevState) {
    axios.get(`https://amazonb20.herokuapp.com/api/v1/category/${this.props.location.state.id}`)
         .then(response => {
          console.log(response)
          this.setState({
            product: response.data[0].image,
            products: response.data
          })
         })
         .catch(error => {
          console.log(error)
         })
  }

  render() {
    const categories = this.props.location.categories
    const category  = this.props.location.state
    var divStyle = {width:500}; 
    const products = this.state.products
    
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-10 imgcels">
            <h2>{category.name}</h2>
            <img src={this.state.product} alt="Norway" style={divStyle}/>
          </div>
        </div>
        <h3 class="my-5">{category.description}</h3>
        <div class="row">
          <CardDeck>
            {products && products.map((product,key) => <Card itemProduct={product}/> )}
          </CardDeck>
        </div>
      </div>  
    );
  }
}

export default Categorias;

