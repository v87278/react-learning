const head = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head)
// console.log(root)

const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"This is h1 tag"),
                React.createElement("h1",{},"This is h2 tag")]))
root.render(parent)