import { createRoot } from "react-dom/client";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>
      <h1>Pizza Padre Gino - Order Now</h1>
      <Pizza name="Pepperoni" description="Pepperoni, cheese, tomato sauce" />
      <Pizza name="Margherita" description="Cheese, tomato sauce, basil" />
      <Pizza name="Quattro Stagioni" description="Pepperoni, ham, artichokes, mushrooms"
      />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);
