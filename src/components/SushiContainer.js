import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, onEatSushi}) { 
  const [sushiIndex, setSushiIndex] = useState(0)
  
  const sushiObjs = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map(sushi => (
    <Sushi sushi={sushi} key={sushi.id} onEatSushi={onEatSushi}/>
  ))

  function handleClick(){
    // (sushiIndex + 4) % sushis.length
    // is a way to wrap back around to the beginning of the array once we get to the end
    // using the remainder (%) operator
    setSushiIndex(sushiIndex => (sushiIndex+4) % sushis.length) // TALK OUT W TC!!!!
  }

  return (
    <div className="belt">
      {sushiObjs}
      <MoreButton onClick={handleClick}/>
    </div>
  );
}

export default SushiContainer;
