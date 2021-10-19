import "./App.css";
import Component from "./Component";
import store from "./store";

function App() {
  return (
    <div>
      <Component store={store} />
    </div>
  );
}

export default App;
