import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, setSushi, setPlates, plates, money, setMoney }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const sushi = sushis.map((sushiObj, index) => {
    if (index < currentIndex + 4 && index >= currentIndex) {
    return <Sushi key={sushiObj.id} sushi={sushiObj} setSushi={setSushi} setPlates={setPlates} plates={plates} money={money}
    setMoney={setMoney} />
  }
})


return (
  <div className="belt">
    {sushi}
    <MoreButton setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
  </div>
);
}

export default SushiContainer;
