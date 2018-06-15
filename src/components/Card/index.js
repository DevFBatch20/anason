import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Example extends Component {
  static propTypes={
    itemProduct: PropTypes.object.isRequired
  }
  render() {
    const {itemProduct} = this.props
    
    return (
      <Card>
        <CardImg top width="100%" src={itemProduct.image} alt={itemProduct.shortName} />
        <CardBody>
          <CardTitle>{itemProduct.shortName}</CardTitle>
          <CardSubtitle>Description</CardSubtitle>
          <CardText>{itemProduct.description}</CardText>
          <Link to="/producto"> <Button>Ver mas</Button> </Link>
        </CardBody>
      </Card>
   );
  }
};

export default Example;