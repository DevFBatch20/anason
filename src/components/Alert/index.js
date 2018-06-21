import React from 'react';
import Proptypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

class Alert extends React.Component  {
  static propTypes = {
    color: Proptypes.string.isRequired,
    message: Proptypes.string.isRequired,
  }
  cuandoLeDeClick = () => {
    this.props.funcionDelPadre(0) 
  }
  render() {
    const { color, message } = this.props;
    return (
      <UncontrolledAlert color={color} onClick={this.cuandoLeDeClick}>
        {message}
      </UncontrolledAlert>
    )
  };
}

export default Alert;