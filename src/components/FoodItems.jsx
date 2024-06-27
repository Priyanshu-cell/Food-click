import React from "react";
import Item from "./Item";

const FoodItems = ({ itmes }) => {
  return (
    <ul className="list-group">
      {itmes.map((item, index) => (
        <React.Fragment key={index}>
          <Item foodItem={item} 
          handleBuyBtn={()=> console.log(`${item} clicked`)}
          />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default FoodItems;

//pass handleByBttn and decides which operation will preform 