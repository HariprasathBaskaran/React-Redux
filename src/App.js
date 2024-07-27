import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./Components/Store";
import IceCreamContainer from "./Components/IceCreamContainer";
import HookCakeContainer from "./Components/HookCakeContainer";
import NewakeContainer from "./Components/NewakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <HookCakeContainer />
        {/* <NewakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
