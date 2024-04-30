import React from "react";

function MoreButton({setCurrentIndex, currentIndex}) {

  function handleMoreSushiClick(e) {
    setCurrentIndex(currentIndex + 4)
  }
  return <button onClick={((e) => handleMoreSushiClick(e))}>More sushi!</button>;
}

export default MoreButton;
