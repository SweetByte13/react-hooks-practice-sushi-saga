import React from "react";

function Table({ plates = [], setMoney}) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const moneyLeftInBank = plates.reduce((money, plate) => money - plate.price, 100)
  setMoney(moneyLeftInBank);

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyLeftInBank} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
