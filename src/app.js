const Pizza=(props)=>{
    return React.createElement(
        "div", null, 
        React.createElement("p",{},[
            React.createElement(props.name),
            React.createElement(props.description)
        ])
    )
}

const App = ()=>{
    return React.createElement("div", null, [
        React.createElement("h1",{},"Pizza Padre Gino"),
        React.createElement(Pizza,{
            name: "Pepperoni",
            description: "Pepperoni, cheese, tomato sauce"
        }),
        React.createElement(Pizza,{
            name: "Margherita",
            description: "Cheese, tomato sauce, basil"
        }),
        React.createElement(Pizza,{
            name: "Quattro Stagioni",
            description: "Pepperoni, ham, artichokes, mushrooms"
        })
    ]
)}

const container= document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); 