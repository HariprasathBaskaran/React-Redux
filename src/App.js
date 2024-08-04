import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./Components/Store";
import IceCreamContainer from "./Components/IceCreamContainer";
import HookCakeContainer from "./Components/HookCakeContainer";
import NewakeContainer from "./Components/NewakeContainer";
import ItemContainer from "./Components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HookCakeContainer />
        <NewakeContainer />
      </div>
    </Provider>
  );
}

export default App;
