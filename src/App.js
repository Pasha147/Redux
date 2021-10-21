import "./App.css";
import Component from "./Component";
import InpComp from "./Inpcomp";
import Coments from "./Coments";
import Spin from "./Spin";
import { useSelector } from "react-redux";

function App() {
  const error = useSelector((state) => state.appReducer.error);

  return (
    <div>
      <Spin />
      {error && <h2>{error}</h2>}
      <Component />
      <InpComp />
      <Coments />
    </div>
  );
}

export default App;
