import Button from "../Button";
import "./styles.css";
import { IoMdTrash } from "react-icons/io";

const Card = ({ transaction, handleTransactions }) => {
  console.log(transaction);
  return (
    <>
      {transaction.type === "Entrada" ? (
        <>
          <li key={transaction.description}>
            <div className="divEntrada"></div>
            <div className="descricao">
              <p>{transaction.description}</p>
              <span>{transaction.type}</span>
            </div>
            <p>
              R${" "}
              {transaction.value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>
            <Button onClick={() => handleTransactions(transaction)}>
              {<IoMdTrash className="icon" />}
            </Button>
          </li>
        </>
      ) : (
        <>
          <li key={transaction.description}>
            <div className="divSaida"></div>
            <div className="descricao">
              <p>{transaction.description}</p>
              <span>{transaction.type}</span>
            </div>
            <p>
              R${" "}
              {transaction.value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>

            <Button
              onClick={() => {
                handleTransactions(transaction);
              }}
            >
              {<IoMdTrash className="icon" />}
            </Button>
          </li>
        </>
      )}
    </>
  );
};
export default Card;
