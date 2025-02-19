import { createRoot } from "react-dom/client";
import Order from "./order";

const App = () => {
  return (
    <div>
      <h1>Pizza Padre Gino - Order Now</h1>
      <Order/>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);
