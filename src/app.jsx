import { createRoot } from "react-dom/client";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>
      <h1>Pizza Padre Gino - Order Now</h1>
      <Pizza name="Pepperoni" description="Pepperoni, cheese, tomato sauce" image={"/public/pizzas/pepperoni.webp"} />
      <Pizza name="Margherita" description="Cheese, tomato sauce, basil" image={"/public/pizzas/hawaiian.webp"} />
      <Pizza name="Quattro Stagioni" description="Pepperoni, ham, artichokes, mushrooms" image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);
