
import style from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
    
  };

  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={style.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
