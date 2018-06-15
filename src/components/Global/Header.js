// Dependencies
import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';

//Assets
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://amazonb20.herokuapp.com/api/v1/categories')
         .then(response => {
          this.setState({
            categories: response.data
          })
         })
         .catch(error => {
          console.log(error)
         })
  }
   
    static propTypes = {
        title: Proptypes.string.isRequired,
        items: Proptypes.array.isRequired,

        menu: Proptypes.string.isRequired,
        textos: Proptypes.array.isRequired
    }
    render(){
      const {title,items}=this.props;
      const {menu,textos}=this.props;
      const categories = this.state.categories;
  
      return (
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">            
            <div className="container">
              <a className="navbar-brand" href="/">La Tiendita..</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                  {items && items.map((item, key) => {
                  return <li className="nav-item" key={key}>
                            <Link className="nav-link" to={item.url}> {item.texto} </Link>
                         </li>}
                  )}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Departamentos
                    </DropdownToggle>
                    <DropdownMenu right>
                      {categories && categories.map((category, key) => {
                        return <DropdownItem className="nav-item" key={key}>
                                  <Link to={{
                                    pathname: `/categories`,
                                    state: category, 
                                    categories: categories
                                  }}>
                                  {category.name}
                                  </Link>
                               </DropdownItem>}
                      )}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ul>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="">
              <img src="../img/navbargrafico.jpg" className="d-inline-block align-top" alt=""/>
            </a>
          </nav>
        </div> 
      );
    }
  }
  

export default Header;