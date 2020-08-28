import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Sobre extends Component {
    render(){
        return (
            <div>
              <h2>Sobre meu projeto</h2>
              <Link to ="/"> Ir para Home </Link>

              <hr/>

            </div>
          );
    }
}

export default Sobre;
