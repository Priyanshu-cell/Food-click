const ErrorMsg = ({ itmes }) => {
  //console.log("Items:", itmes); // Debug log
  return <>{itmes.length === 0 ? <h3>I am still hungry.</h3> : null}</>;
};

export default ErrorMsg;
