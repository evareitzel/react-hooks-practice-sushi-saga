import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushiData =>
    setSushis(sushiData))
  }, [])

  function handleEatSushi(eatenSushi){
    if(wallet >= eatenSushi.price){
      const updatedSushis = sushis.map(sushi => {
        if(sushi.id === eatenSushi.id) return {...sushi, eaten: true}  
        return sushi
      })
      setSushis(updatedSushis)
      setWallet(wallet => wallet - eatenSushi.price)
    }else{
      alert('Need more 💸')
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table wallet={wallet}/>
    </div>
  );
}

export default App;
