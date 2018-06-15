//appjs es el body con el que voy a dividir la aplicación, generalmente es header, body y footer
//Dependencias
import React, { Component } from 'react';
import axios from 'axios';
import { CardDeck } from 'reactstrap';
// Components
import Carousel from '../Carousel'
import Card from '../Card'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://amazonb20.herokuapp.com/api/v1/topten')
         .then(response => {
          this.setState({
            items: response.data
          })
         })
         .catch(error => {
          console.log(error)
         })
  }
  render() { 
    const items = this.state.items
    return (
        <div>
          <Carousel />
            <CardDeck>
              {items && items.map((item,key) => <Card itemProduct={item}/> )}
            </CardDeck>
        </div>
    );
  }
}

export default Home;