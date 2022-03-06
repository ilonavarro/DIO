import React from "react";
import Button from "./Button";

const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;

const hasCustomer = true;

const App = () => {
  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      {buttonA}
    </div>
  );
  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar o cliente
      <br />
      {buttonB}
    </div>
  );

  const showCustomer = () => {
    if (!hasCustomer) return null;
    return <div>Nome do cliente: Ilo Navarro</div>;
  };

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo à nossa aula</p>
      <div>
        <Button />
      </div>
      <br />
      {!hasCustomer ? renderShowHistory : renderAddCustomer}
      <h1>{showCustomer()}</h1>
    </div>
  );
};
export default App;
