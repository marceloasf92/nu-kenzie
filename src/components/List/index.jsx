import "./styles.css";
import Card from "../Card";
import Button from "../Button";
import { useState } from "react";
// import { useState } from "react";

const List = ({ listTransactions, handleTransactions }) => {
  const [isClick, setIsClick] = useState("Todos");

  function gerarCards() {
    return isClick === "Todos"
      ? listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            handleTransactions={handleTransactions}
          />
        ))
      : listTransactions
          .filter((item) => item.type === isClick)
          .map((transaction, index) => (
            <>
              <Card
                transaction={transaction}
                key={index}
                handleTransactions={handleTransactions}
              />
            </>
          ));
  }

  function gerarVazio() {
    return (
      <>
        <div className="container-Vazio">
          <p>Você ainda não possui nenhum lançamento</p>
          <div className="container-Vazio-Secundario">
            <div className="canto"></div>
            <div className="container-flex">
              <div className="linhaUm"></div>
              <div className="linhaDois"></div>
            </div>
          </div>
          <div className="container-Vazio-Secundario">
            <div className="canto"></div>
            <div className="container-flex">
              <div className="linhaUm"></div>
              <div className="linhaDois"></div>
            </div>
          </div>
          <div className="container-Vazio-Secundario">
            <div className="canto"></div>
            <div className="container-flex">
              <div className="linhaUm"></div>
              <div className="linhaDois"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container-List">
      <div className="container-Buttons">
        <h2>Resumo Financeiro</h2>
        <div className="container-flexButtons">
          <Button className="Todos" onClick={() => setIsClick("Todos")}>
            Todos
          </Button>
          <Button className="Entrada" onClick={() => setIsClick("Entrada")}>
            Entradas
          </Button>
          <Button className="Saida" onClick={() => setIsClick("Saida")}>
            Despesas
          </Button>
        </div>
      </div>
      <ul>{listTransactions.length === 0 ? gerarVazio() : gerarCards()}</ul>
    </div>
  );
};

export default List;
