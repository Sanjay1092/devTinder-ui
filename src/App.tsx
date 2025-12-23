import { Provider } from "react-redux";
import AppRouter from "./routes/routes";
import AppStore from "./store/appStore";

function App() {
  return (
    <Provider store={AppStore}>
      <AppRouter />
    </Provider>
  );
}

export default App;
