import { useState } from "react";

import Button from "../Button";

const Card = () => {
  const [valor, setValor] = useState(0);

  function addValue() {
    setValor(valor + 1);
  }
  function remValue() {
    setValor(valor - 1);
  }

  return (
    <div className="card">
      <div className="card-header">Meu primeiro card</div>
      <div className="card-body">
        <Button className={"btn btn-success"} onClick={addValue}>
          Adicionar
        </Button>
        <Button className={"btn btn-danger"} onClick={remValue}>
          Remover
        </Button>
        <p>{valor}</p>
        <button type="button" className="btn btn-warning" onClick={addValue}>
          Adicionar
        </button>
        <button type="button" className="btn btn-info" onClick={remValue}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default Card;
