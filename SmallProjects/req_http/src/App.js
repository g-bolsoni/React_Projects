import React, { Component } from 'react';
import './style.css'
//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      nutri:[]
    };
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)// Está chamando a APIS
    .then((r)=> r.json()) //Se conseguir acessar a API vai entrar nesse .then, que vai trasformar em json
    .then((json)=>{  // Vai conseguir pegar o json da API
        let state = this.state;
        state.nutri = json;
        this.setState(state);

    })
  }
  render(){
    return (
      <div className="container">
          <header>
            <strong className="header">React Nutri</strong>
          </header>

          {this.state.nutri.map((item)=>{
            return(
              <article  key={item.id} className="post">
                  <strong className="titulo">{item.titulo}</strong>
                  <img src={item.capa} className="capa"/>
                  <p className="subtitulo">{item.subtitulo}</p>
                  <a className="botao" href="#"> Acessar </a>
              </article>
            );
          })}
      </div>
    );
  }
}

export default App;
