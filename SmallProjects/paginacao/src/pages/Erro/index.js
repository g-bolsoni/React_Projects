import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Erro extends Component {
    render(){
        return (
            <div>
              <h2>Opss ... PAgina n encontrada</h2>
              <h3>Voce esta procurando por ??</h3>
                <Link to ="/">  Home </Link><br/><br/>
                <Link to ="/sobre"> Sobre  </Link>
            

            </div>
          );
    }
}

export default Erro;
