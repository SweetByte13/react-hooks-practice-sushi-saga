import React, { useState } from "react";

function Sushi({ sushi, setSushi, setPlates, plates, money, SetMoney}) {

  const { id, name, img_url, price, created_at } = sushi
  const [eaten, setEaten] = useState(false)


  function handleEatenClick() {
    if(money<sushi.price) {
      return ;
    }
    if(eaten) {
      return ;
    }
    setEaten((eaten) => !eaten)
    setPlates([...plates , sushi])
  }

  return (
    <div className="sushi">
      <div className="plate" key={id} onClick={(() => handleEatenClick())}>

        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name}  - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
