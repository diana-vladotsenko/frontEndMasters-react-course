import {useEffect,useState} from "react";
import Pizza from "./pizza"

const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function Order(){
    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");
    const [loading, setLoading] = useState(true);

    let price, selectedPizza;
    if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    }
    async function fetchPizzaTypes() {
        const pizzasRes = await fetch("/api/pizzas");
        const pizzasJson = await pizzasRes.json();
        setPizzaTypes(pizzasJson);
        setLoading(false);
      }

    useEffect(() => {
        fetchPizzaTypes();
    }, []);

    return (
        <div className="order">
            <h2>Make an Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizzaType">Type:</label>
                        <select 
                        onChange={(e)=>setPizzaType(e.target.value)}
                        name="pizza-type" value={pizzaType}>
                            {pizzaTypes.map((pizza) => (
                                <option key={pizza.id} value={pizza.id}>
                                    {pizza.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div onChange={(e) => setPizzaSize(e.target.value)}>
                        <label htmlFor="pizzaSize">Size:</label>
                        <div>
                            <span>
                                <input 
                                checked = {pizzaSize === "S"}
                                type="radio"
                                name="pizza-size"
                                value="S"
                                id="pizza-s"/>
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input 
                                checked = {pizzaSize === "M"}
                                type="radio"
                                name="pizza-size"
                                value="M"
                                id="pizza-m"/>
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input 
                                checked = {pizzaSize === "L"}
                                type="radio"
                                name="pizza-size"
                                value="L"
                                id="pizza-l"/>
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                </div>
                <button type="submit">Add To Card</button>
                <div className="order-pizza">
                    <Pizza name="Pepperoni" description="another pep" image="/public/pizzas/pepperoni.webp"/>
                <p>10$</p>
                </div>
            </div>
            </form>
        </div>
    );
}