import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

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
          <Button>Button</Button>
        </CardBody>
      </Card>
   );
  }
};

export default Example;