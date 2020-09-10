import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Header extends Component {
    render(){
        return (
            <div>
              <h2>Header meu projeto <Link to="/">Home</Link><br/></h2>
              
              <hr/>
            </div>
          );
    }
}

export default Header;
