import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [can, setCan] = useState(0);
  const [tugba, setTugba] = useState(0);
  useEffect(() => {
    console.log("ilk kez render edildiğinde calısır.daha da calısmaz");
  }, []);

  useEffect(() => {
    console.log("Her zaman calısır.");
  });

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde ve can değerinde bir değişiklik oldugunda calısır."
    );
  }, [can]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde ve tugba değerinde bir değişiklik oldugunda calısır."
    );
  }, [tugba]);
  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde , can ve tugba değerinde bir değişiklik oldugunda calısır."
    );
  }, [can,tugba]);



  return (
    <div className="App">
      <div className="firstDiv">
        <button
          onClick={() => {
            setCan(can + 1);
          }}
        >
          {" "}
          Can ++
        </button>
        <div>Can : {can} </div>
      </div>
      <div>
        <button
          onClick={() => {
            setTugba(tugba + 1);
          }}
        >
          {" "}
          Tuğba ++
        </button>
        <div>Tuğba : {tugba} </div>
      </div>
    </div>
  );
}

export default App;
