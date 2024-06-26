import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodInput from "./components/FoodInput";


function App() {
  let foodItems = ["dal", "roti", "salad", "milk", "green vegetable"];
  //console.log("App Items:", foodItems); // Debug log in parent

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMsg itmes={foodItems}> </ErrorMsg>
      <FoodInput></FoodInput>
      <FoodItems itmes={foodItems}/> 
    </Container>
    {/* <Container>
      <p>Above is the list of food items that is healthy for well living.</p>
    </Container> */}
    </>
  );
}

export default App;
