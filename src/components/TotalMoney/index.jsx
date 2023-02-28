import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="container-Money">
      <p>Valor total:</p>
      <p>
        ${" "}
        {listTransactions
          .reduce((acc, cur) => {
            if (cur.type === "Entrada") {
              acc = acc + Number(cur.value);
            } else if (cur.type === "Saida") {
              acc = acc - Number(cur.value);
            }

            return acc;
          }, 0)
          .toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
      </p>
    </div>
  );
};

export default TotalMoney;
