import "./styles.css";
import Button from "../../components/Button";

const EntryPage = ({ isOn, setIsOn }) => {
  return (
    <div className="entryPage">
      <div className="informacoesEntryPage">
        <div className="logoKenzie"></div>
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <Button onClick={() => setIsOn(!isOn)}>Iniciar</Button>
      </div>
      <div className="backgroundEntryPage"></div>
    </div>
  );
};
export default EntryPage;
