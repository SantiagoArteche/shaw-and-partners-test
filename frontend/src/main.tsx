import ReactDOM from "react-dom/client";
import CSVApp from "./CSVApp.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <CSVApp />
  </Provider>
);
