import styles from "./Item.module.css";
const Item = ({ foodItem }) => {

  const handleBuyBtnClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} clicked.`);
  }
  //let {foodItems} = props;
  return (
    <li className={`${styles["my-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(e) =>handleBuyBtnClicked(e)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
