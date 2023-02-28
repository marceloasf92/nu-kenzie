// import "./App.css";
import MainPage from "./pages/MainPage";
import EntryPage from "./pages/EntryPage";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {!isOn ? (
          <EntryPage setIsOn={setIsOn} isOn={isOn} />
        ) : (
          <MainPage setIsOn={setIsOn} isOn={isOn} />
        )}
      </header>
    </div>
  );
}

export default App;
