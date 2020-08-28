import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Header extends Component {
    render(){
        return (
            <div>
              <h2>Header meu projeto</h2>
              <Link to="/">Home</Link><br/>
              <Link to="/sobre">Sobre</Link>

              <hr/>
            </div>
          );
    }
}

export default Header;
