import ReactDOM from "react-dom/client";
import Header from "./Layouts/Header";
import Counter from "./Components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />

    <Counter />
  </div>
);
