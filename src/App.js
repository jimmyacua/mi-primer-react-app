import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import cars from "./data/cars.json";
import ConditinalSection from "./sections/conditional";
import Formulario from "./sections/forms";

/* function Hello(props) {
  return <h2>{props.title}</h2>
} */

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const {boolean, arrayOfNumbers, objectWithInfo, text, number} = this.props;
    const textoSegunBool = boolean ? "Cierto" : "Falso";
    const mappedNumbers = arrayOfNumbers.map((n) => n * 2);
    let array = [];
    Object.keys(objectWithInfo).map(function (llave, valor) {
      array.push([llave, ":", valor, "\n"]);
      return array;
    });
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{array}</p>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Title.defaultProps = {
  text: "Titulo por defecto"
};

//forma 1 de state:
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: this.props.contadorInicial};
    setInterval(() => {
      //actualiza el state aut. Es asincrono
      this.setState({contador: this.state.contador + 1});
    }, 1000);
  }
  render() {
    //return <span>{this.state.contador}</span>
    return <ContadorNumero numero={this.state.contador}></ContadorNumero>;
  }
}

Contador.defaultProps = {
  contadorInicial: 0
};

//forma 2: state usando Class Field
/*class Contador extends Component{
  state = {contador:0};
  render(){
    return(
      <div>
        <h2>El contador está en {this.state.contador}</h2>
      </div>
    )
  }
}*/

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>;
  }
}

class CarItem extends Component {
  render() {
    const {car} = this.props;
    return (
      <li key={car.id}>
        <p>
          <strong>Nombre: {car.name}</strong>
        </p>
        <p>
          <strong>Creador: {car.company}</strong>
        </p>
      </li>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {mouseX: 0, mouseY: 0};
    //this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleClick(e) {
    console.log(e);
    console.log(e.nativeEvent);
    alert("Hola");
  }
  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({mouseX: clientX, mouseY: clientY});
  };
  render() {
    const numbers = [1, 1, 3, 4, 5];
    const a = 1;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Aprender React </p>
          {/* FORM*/}
          <Formulario></Formulario>
          <h4>Eventos</h4>
          <button onClick={this.handleClick}>Hola</button>
          <div
            onMouseMove={this.handleMouseMove}
            style={{border: "1px solid #000", marginTop: 10, padding: 10}}
          >
            <p>
              {this.state.mouseX}, {this.state.mouseY}
            </p>
          </div>
          <Title text="Titulo"></Title>
          <h4>Listas:</h4>
          {numbers.map((n, index) => {
            return <p key={index}>Soy el numero {n}</p>;
          })}
          <h4>Lista de objetos</h4>
          <ul>
            {cars.map((car) => {
              return <CarItem key={car.id} car={car}></CarItem>;
            })}
          </ul>
          <Hello title="Componente con state"></Hello>
          <Contador></Contador>
          <ConditinalSection></ConditinalSection>
          <Text
            text="texto"
            number={5}
            boolean={true}
            arrayOfNumbers={[1, 2, 5, 6]}
            objectWithInfo={{key: "value1", key2: "value2"}}
          ></Text>
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
