import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* function Hello(props) {
  return <h2>{props.title}</h2>
} */

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const {boolean, arrayOfNumbers, objectWithInfo, text, number} = this.props;
    const textoSegunBool = boolean ? "Cierto" : "Falso";
    const mappedNumbers = arrayOfNumbers.map(n => n*2)
    let array = [];
    Object.keys(objectWithInfo).map(function(llave, valor){
      array.push([llave,":" , valor, "\n"]);
      return array;
    })
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{array}</p>
      </div>
    )
  }
}

class Title extends Component{
  render(){
  return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps = {
  text: "Titulo por defecto"
}

//forma 1 de state:
/*class Contador extends Component{
  constructor(){
    super()
    this.state = {contador: 1}
  }
  render(){
  return <span>{this.state.contador}</span>
  }
}*/

//forma 2: state usando Class Field
class Contador extends Component{
  state = {contador:0};
  render(){
    return(
      <div>
        <h2>El contador está en {this.state.contador}</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Aprender React </p>
          <Title text="Titulo"></Title>
          <Hello title="Componente con state"></Hello>
          <Contador></Contador>
          <Text 
            text="texto" 
            number={5} 
            boolean={true} 
            arrayOfNumbers={[1,2,5,6]}
            objectWithInfo={{key:"value1", key2:"value2"}}>
          </Text>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
