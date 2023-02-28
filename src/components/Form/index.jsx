import "./styles.css";
import { useState } from "react";
import Button from "../Button";

const Form = ({ handleData }) => {
  const options = [
    {
      label: "Entrada",
      value: "Entrada",
    },
    {
      label: "Saida",
      value: "Saida",
    },
  ];

  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [option, SetOption] = useState(options[0].value);

  const addData = (e) => {
    e.preventDefault();

    const newData = {
      description: descriptionInput,
      type: option,
      value: Number(valueInput),
    };

    const valueNull = Object.values(newData).some((value) => value === "");
    !valueNull && handleData(newData);

    setDescriptionInput("");
    setValueInput("");
  };

  return (
    <form onSubmit={addData}>
      <div className="descricao">
        <label>Descrição</label>
        <input
          type="text"
          value={descriptionInput}
          onChange={(event) => setDescriptionInput(event.target.value)}
          placeholder="Digite aqui sua descrição"
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="container-ValueSelect">
        <div className="container-Value">
          <label>Valor</label>
          <input
            type="text"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
            placeholder="1                 R$"
          />
        </div>
        <div className="container-Select">
          <label>Tipo de valor</label>
          <select onChange={(event) => SetOption(event.target.value)}>
            {options.map(({ value = "Entrada", label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button type="submit">Inserir Valor</Button>
    </form>
  );
};

export default Form;
