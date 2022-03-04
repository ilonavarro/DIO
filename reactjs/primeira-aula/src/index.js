import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function sum(a, b) {
  return a + b;
}

function primeiroJSX() {
  return (
    <div className="teste">
      <h1>Ilo Navarro - Introdução ao ReactJS</h1>
      <h2>Soma: de 10 + 20 = {sum(10, 20)}</h2>
    </div>
  );
}

const App = () => {
  return (
    <>
      <div>{primeiroJSX()}</div>
      <div className="App">Hello World</div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
