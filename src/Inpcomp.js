import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./actions";

function InpComp(props) {
  // console.log("props input >", props);

  const dispatch = useDispatch();
  const text = useSelector((state) => {
    // console.log("useSelector state", state);
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const handleChange = (e) => {
    // console.log("input text>>", e.target.value);
    dispatch(inputText(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}

export default InpComp;
