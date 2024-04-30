import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then((resp) => resp.json())
    .then ((data) => setSushi(data))
  }, [])


  return (
    <div className="app">

      <SushiContainer 
      sushis={sushis} 
      setSushi={setSushi} 
      setPlates={setPlates} 
      plates={plates}
      money={money}
      SetMoney={setMoney} />

      <Table 
      sushis={sushis} 
      plates={plates} 
      setPlates={setPlates}
      money={money}
      setMoney={setMoney} />
    </div>
  );
}

export default App;
