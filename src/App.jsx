import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";


function App() {
  const [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) =>{
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  }

  let [textToShow, setTextState]  = useState();

  //console.log(`Current value of textState: ${textToShow}`);

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown = {onKeyDown}></FoodInput>
      <ErrorMsg itmes={foodItems}> </ErrorMsg>
      <FoodItems itmes={foodItems}/> 
    </Container>

    {/* <Container>
      <p>Above is the list of food items that is healthy for well living.</p>
    </Container> */}
    </>
  );
}

export default App;
