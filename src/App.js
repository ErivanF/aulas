import "./App.css";
import { useState } from "react";
import List from "./Components/Lista";
function App() {
  const [list, setList] = useState(["Beber", "Usar drogas", "Andar de moto"]);
  const [item, setItem] = useState("");
  const removeItem = (item) => {
    setList(list.filter((li) => li !== item));
  };
  return (
    <div className="App">
      <h1>Coisas para fazer em SP</h1>
      <input
        placeholder="O que fazer?"
        onChange={(e) => {
          setItem(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setList([...list, item]);
        }}
      >
        Adicionar
      </button>
      <List list={list} removeItem={removeItem} />
    </div>
  );
}

export default App;
