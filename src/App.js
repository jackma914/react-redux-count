import "./App.css";
import Subscribers from "./components/Subscribers";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers></Subscribers>
      </div>
    </Provider>
  );
}

export default App;
