import { useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import Button from "../../components/Button";
import "./styles.css";

const MainPage = ({ isOn, setIsOn }) => {
  const [listTransactions, setListTransactions] = useState([]);

  function handleTransactions(removeItem) {
    const newTransactions = listTransactions.filter(
      (item) => item !== removeItem
    );
    setListTransactions(newTransactions);
  }

  const handleData = (newData) => {
    setListTransactions([...listTransactions, newData]);
  };

  return (
    <>
      <header className="container-Header">
        <div className="container-Logo">
          <div className="logoKenziePreto"></div>
          <Button onClick={() => setIsOn(!isOn)}>Inicio</Button>
        </div>
      </header>
      <main>
        <div className="container-Main">
          <section>
            <Form handleData={handleData} />
            <TotalMoney listTransactions={listTransactions} />
          </section>
          <aside>
            <List
              listTransactions={listTransactions}
              handleTransactions={handleTransactions}
            />
          </aside>
        </div>
      </main>
    </>
  );
};

export default MainPage;
