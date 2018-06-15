//appjs es el body con el que voy a dividir la aplicación, generalmente es header, body y footer
//Dependencias
import React, { Component } from 'react';
import axios from 'axios';
import { CardDeck, Row, Col } from 'reactstrap';
// Components
import Carousel from '../Carousel'
import Card from '../Card'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.items;
  }

  componentWillMount() {
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
            <Row>
              <Col md="3">
                {items && items.map((item,key) => <Card itemProduct={item}/> )}
              </Col>
            </Row>
        </div>
    );
  }
}

export default Home;